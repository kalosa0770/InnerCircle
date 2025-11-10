import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Mock login function
// const handleLogin = (email, password) => {
//     console.log("Attempting login for:", email);
//     console.log("Password (mock):", password);
// };

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    
        if (!email || !password) {
            setError("Please enter both your email and password.");
            return;
        }
    
        try {
            const res = await axios.post("http://localhost:3001/api/auth/login", {
                email: email.trim(),
                password
            }, { withCredentials: true }); // important if using cookies
    
            if (res.data.success) {
                navigate('/dashboard'); // successful login
            } else {
                setError(res.data.message || "Invalid login credentials.");
            }
    
        } catch (err) {
            console.error(err);
            setError("Server error. Please try again later.");
        }
    };
    

    // Tailwind class shortcuts for gold-teal palette
    const inputBase = "block w-full py-3 px-0 text-lg text-dark-teal bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gold peer";
    const labelBase = "absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-focus:text-gold peer-focus:-translate-y-6 peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-0";

    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-50 font-nunito p-4">
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
                
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-teal mb-2 text-center">Welcome Back</h1>
                <p className="text-base text-gray-500 mb-8 text-center">
                    Sign in to access your personalized mental wellness tools.
                </p>

                {/* Error */}
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">

                    {/* Email Input */}
                    <div className="relative w-full group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputBase}
                            placeholder=" "
                            required
                        />
                        <label className={labelBase}>Email Address</label>
                    </div>

                    {/* Password Input */}
                    <div className="relative w-full group mb-2">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={inputBase}
                            placeholder=" "
                            required
                        />
                        <label className={labelBase}>Password</label>
                    </div>

                    {/* Forgot Password */}
                    <div className="w-full text-right text-sm">
                        <Link to="/forgot" className="text-gold font-semibold hover:text-dark-gold transition duration-150">
                            Forgot Password?
                        </Link>
                    </div>
                    {/* <div className="w-full text-right text-sm">
                        <Link to="/verify-email" className="text-gold font-semibold hover:text-dark-gold transition duration-150">
                            Verify Email
                        </Link>
                    </div> */}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="bg-gold text-teal-900 w-full rounded-full py-3 px-4 text-lg font-bold shadow-md hover:bg-dark-gold transition duration-300 mt-4"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account? 
                    <Link to="/register" className="text-gold font-extrabold hover:text-dark-gold ml-1">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
