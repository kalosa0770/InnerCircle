import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';
import transporter from '../config/nodemailer.js'

export const register = async ( req, res ) => {
    // Defensive: ensure req.body exists to avoid destructuring undefined
    const body = req.body || {};
    const { email, firstName, lastName, phoneNumber, userStatus, password } = body;

    if (!email || !firstName || !lastName || !phoneNumber || !userStatus || !password) {
        return res.status(400).json({ success: false, message: 'Missing required details' });
    }

    try {

        const existingUser = await userModel.findOne({email})

        if (existingUser) {
            return res.status(409).json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({email, firstName, lastName, phoneNumber, userStatus, password: hashedPassword});
        await user.save();

        // token generation
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        //Sending welcom email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email, 
            subject: 'Welcome to Inner Circle, your home for mental wellness. Always there, always for you.',
            text: `Hello ${firstName} ${lastName}, your account has been created, you can now login to your dashboard.`
        }

        await transporter.sendMail(mailOptions);

        return res.json({ success: true });


    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const login = async (req, res) => {
    const {email, password } = req.body;

    if (!email || !password) {
        return res.json({success: false, message: "Email and password are required"})
    }

    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: 'Invalid email'})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({success: false, message: 'Invalid password'});

        }

        // token generation
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.json({success: true});



    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const logout = async (req, res) => {
        try {
            res.clearCookie('token', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            });

            return res.json({success: true, message: "Logged Out"});
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
    
}

export const sendVerifyOtp = async (req, res) => {
    try{

        const body = req.body || {};
        const userId = req.userId || body.userId;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        if (user.isAccountVerified) {
            return res.json({ success: false, message: 'Account Already Verified' });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 60 * 60 * 1000;

        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email, 
            subject: 'Account Verification OTP',
            text: `Your OTP is ${otp}. Verify your account using this OTP.`
        }

        await transporter.sendMail(mailOption);

        res.json({ success: true, message: 'Verification OTP sent on Email'})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const verifyEmail = async (req, res) => {
    const body = req.body || {};
    const userId = req.userId || body.userId;
    const { otp } = body;

    if (!userId || !otp) {
        return res.json({success: false, message: 'Missing Details'});

    }

    try {
        
        const user = await userModel.findById(userId);

        if(!user) {
            return res.json({ success: false, message: 'User not found'});

        }

        if (user.verifyOtp === '' || user.verifyOtp !==otp) {
             return res.json({ success: false, message: 'Invalid OTP' });
        }

        if(user.verifyOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: 'OTP Expired' });
        }

        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = 0;

        await user.save();

        return res.json({ success: true, message: "Email verified successfull."});

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const isAuthenticated = async (req, res) => {
    try {
        return res.json({ success: true});
    }catch (error) {
        return res.json({success: false, message: error.message})
    }
}

//Send Password Reset OTP
export const sendResetOtp = async (req, res) => {
    const {email } =req.body;

    if (!email) {
        return res.json({ success: false, message: 'Email is required'});
    }

    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({ success: false, message: 'User not found'});
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;

        await user.save();

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email, 
            subject: 'Password Reset OTP',
            text: `Your OTP for resetting your password is ${otp}. Use this OTP to proceed with resetting your password.`
        }

        await transporter.sendMail(mailOption);
        
        return res.json({ success: true, message: 'OTP sent to your email'});
    } catch (error) {

        return res.json({ success: false, message: error.message})
    }

}

// Reset user password

export const resetPassword = async ( req, res ) => {

    const { email, otp, newPassword } = req.body || {};

    if (!email || !otp || !newPassword) {
        return res.json({ success: false, message: 'Email, OTP, and new password required' });
    }

    try {

        const user = await userModel.findOne({email});

        if(!user) {
            return res.json({ success: false, message: 'User not found'});
        }

        if(user.resetOtp === "" || user.resetOtp !== otp) {
            return res.json({ success: false, message: 'OTP is incorrect'})
        }

        if (user.resetOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: 'OTP is expired'})
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetOtp = "";
        user.resetOtpExpireAt = 0;

        await user.save();

    return res.json({ success: true, message: 'You have successfully reset your password' });

    } catch (error){
        return res.json({ success: false, message: error.message})
    }
}
