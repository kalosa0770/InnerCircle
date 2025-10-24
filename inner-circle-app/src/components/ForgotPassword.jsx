import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock function for demonstration
const handlePasswordReset = (email) => {
    // Replace with actual API call to send a reset link
    console.log("Sending password reset email to:", email);
};

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!email) {
            setError("Please enter your email address to proceed.");
            return;
        }

        // Simulate sending a reset email
        handlePasswordReset(email);
        setMessage("If an account exists for that email, a password reset link has been sent.");
        setEmail(''); // Clear the input field
    };

    return (
        // Outer Container: Centered on screen
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-50 font-nunito p-4">
            
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
                
                {/* Header and Subtitle */}
                <h1 className="text-4xl font-extrabold text-teal-800 mb-2 text-center">Forgot Password?</h1>
                <p className="text-base text-gray-500 mb-8 text-center">
                    Enter the email associated with your account and we'll send a link to reset your password.
                </p>
                
                {/* Status Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}
                {message && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm text-center">
                        {message}
                    </div>
                )}

                {/* Form Container */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
                    
                    {/* 1. Email Input (Floating Label) */}
                    <div className="relative w-full group">
                        <input 
                            type="email" 
                            name="email" 
                            id="forgot-email-input" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                        focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                            placeholder=" " 
                            required 
                        />
                        <label 
                            htmlFor="forgot-email-input" 
                            className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] 
                                       peer-focus:text-teal-600 peer-focus:-translate-y-6 peer-focus:scale-75 
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:left-0"
                        >
                            Email Address
                        </label>
                    </div>
                    
                    {/* 2. Reset Button */}
                    <button 
                        type="submit" 
                        className="bg-teal-700 text-white w-full rounded-full py-3 px-4 text-lg font-bold shadow-md 
                                   transition duration-300 hover:bg-teal-800 mt-4"
                    >
                        Reset Password
                    </button>
                </form>

                {/* Back to Login Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Remember your password? 
                    <Link 
                        to="/login" 
                        className="text-teal-600 font-extrabold hover:text-teal-700 ml-1"
                    >
                        Back to Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
