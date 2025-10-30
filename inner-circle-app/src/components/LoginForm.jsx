import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Key router imports

// Using a mock function for demonstration
const handleLogin = (email, password) => {
    // Replace with your actual authentication logic (e.g., calling Firebase auth)
    console.log("Attempting login for:", email);
    console.log("Password (mock):", password);
    // On success: redirect user
    // On failure: display error message
};

// NOTE: We no longer accept onNavigateToRegister/Forgot as props
const Login = () => {
    // useNavigate is used for programmatic navigation (like after a successful login)
    const navigate = useNavigate(); 
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit =  (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError("Please enter both your email and password.");
            return;
        }

        

        // Simulate successful login, then navigate to the Home page
        handleLogin(email, password);
         navigate('/dashboard'); // Uncomment this line on successful login
    };

    return (
        // Outer Container: Centered on screen
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-50 font-nunito p-4">
            
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
                
                {/* Header and Subtitle */}
                <h1 className="text-4xl font-extrabold text-teal-800 mb-2 text-center">Welcome Back</h1>
                <p className="text-base text-gray-500 mb-8 text-center">
                    Sign in to access your personalized mental wellness tools.
                </p>
                
                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Form Container */}
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
                    
                    {/* 1. Email Input (Floating Label) */}
                    <div className="relative w-full group">
                        <input 
                            type="email" 
                            name="email" 
                            id="login-email-input" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                        focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                            placeholder=" " 
                            required 
                        />
                        <label 
                            htmlFor="login-email-input" 
                            className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] 
                                       peer-focus:text-teal-600 peer-focus:-translate-y-6 peer-focus:scale-75 
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:left-0"
                        >
                            Email Address
                        </label>
                    </div>

                    {/* 2. Password Input (Floating Label) */}
                    <div className="relative w-full group mb-2">
                        <input 
                            type="password" 
                            name="password" 
                            id="login-password-input" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                        focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                            placeholder=" " 
                            required 
                        />
                        <label 
                            htmlFor="login-password-input" 
                            className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] 
                                       peer-focus:text-teal-600 peer-focus:-translate-y-6 peer-focus:scale-75 
                                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:left-0"
                        >
                            Password
                        </label>
                    </div>

                    {/* Forgot Password Link - NOW USES LINK COMPONENT */}
                    <div className="w-full text-right text-sm">
                        <Link 
                            to="/forgot" 
                            className="text-teal-600 font-semibold hover:text-teal-700 transition duration-150"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    
                    {/* 3. Login Button */}
                    <button 
                        type="submit" 
                        className="bg-teal-700 text-white w-full rounded-full py-3 px-4 text-lg font-bold shadow-md 
                                   transition duration-300 hover:bg-teal-800 mt-4"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link - NOW USES LINK COMPONENT */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account? 
                    <Link 
                        to="/register" 
                        className="text-teal-600 font-extrabold hover:text-teal-700 ml-1"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
