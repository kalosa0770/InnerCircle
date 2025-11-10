import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
    try {

        // Prefer userId set by auth middleware; fall back to body.userId for compatibility
        const body = req.body || {};
        const userId = req.userId || body.userId;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({success: false, message: 'User not found'});
        }

        res.json({
            success: true,
            userData: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                // isAccountVerified: user.isAccountVerified
            }
        })
    } catch (error) {
        res.json({ success: false, message: error.message})
    }
}