import React, { useState } from "react";
import { ChevronLeftIcon, CheckIcon } from 'lucide-react';

// --- Form Step Wrapper Component ---
// This handles the card styling, header, and progress bar display
const FormStepWrapper = ({ step, title, subtitle, children, onBack }) => (
    <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl relative">
        
        {/* Back Button (Visible from Step 2 onwards) */}
        

        {/* PROGRESS BAR */}
        <div className="flex justify-between w-full mb-8 space-x-2 pt-4">
            {[1, 2, 3, 4].map((s) => (
                <div 
                    key={s} 
                    className={`h-2 w-1/4 rounded-full ${s <= step ? 'bg-teal-600 shadow-inner' : 'bg-gray-200'}`}
                ></div>
            ))}
        </div>
        
        {/* Header and Subtitle */}
        <h1 className="text-4xl font-extrabold text-teal-800 mb-2 text-center">{title}</h1>
        <p className="text-base text-gray-500 mb-8 text-center">{subtitle}</p>
        
        {/* Content (Form) */}
        {children}

        {step > 1 && (
            <button 
                onClick={onBack} 
                className="mt-15 bg mx-auto text-gray-600 border-b-2 hover:text-teal-800 transition duration-150 flex"
                aria-label="Go back to the previous step"
            >
                 <ChevronLeftIcon className="size-6" /> Go back
            </button>
        )}
    </div>
);


// -----------------------------------------------------------------
// 1. Step 1: Email Input
// -----------------------------------------------------------------
const EmailStep = ({ onNext, setFormData, formData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic can go here
        onNext();
    };

    return (
        <FormStepWrapper 
            step={1} 
            title="Let's get started" 
            subtitle="Your 30-day free trial awaits—no credit card needed!"
        >
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
                {/* Input with Floating Label Effect */}
                <div className="relative w-full mb-4 group">
                    <input 
                        type="email" 
                        name="email" 
                        id="email-input" 
                        value={formData.email || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                    focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                        placeholder=" " 
                        required 
                    />
                    <label 
                        htmlFor="email-input" 
                        className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] 
                                   peer-focus:text-teal-600 peer-focus:-translate-y-6 peer-focus:scale-75 
                                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 
                                   peer-placeholder-shown:top-4 peer-placeholder-shown:left-0"
                    >
                        Your Email Address
                    </label>
                </div>
                
                <button 
                    type="submit" 
                    className="bg-teal-700 text-white w-full rounded-full py-3 px-4 text-lg font-bold shadow-md 
                               transition duration-300 hover:bg-teal-800"
                >
                    Next
                </button>
            </form>
        </FormStepWrapper>
    );
};


// -----------------------------------------------------------------
// 2. Step 2: Name Input
// -----------------------------------------------------------------
const NameStep = ({ onNext, onBack, setFormData, formData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };

    return (
        <FormStepWrapper 
            step={2} 
            title="Who are you?" 
            subtitle="Just a couple of details to personalize your experience."
            onBack={onBack}
        >
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
                
                {/* First Name Input */}
                <div className="relative w-full mb-4 group">
                    <input 
                        type="text" 
                        name="firstName" 
                        id="first-name-input" 
                        value={formData.firstName || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                    focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                        placeholder=" " 
                        required 
                    />
                    <label 
                        htmlFor="first-name-input" 
                        className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] 
                                   peer-focus:text-teal-600 peer-focus:-translate-y-6 peer-focus:scale-75 
                                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 
                                   peer-placeholder-shown:top-4 peer-placeholder-shown:left-0"
                    >
                        First Name
                    </label>
                </div>

                 {/* Last Name Input */}
                <div className="relative w-full mb-4 group">
                    <input 
                        type="text" 
                        name="lastName" 
                        id="last-name-input" 
                        value={formData.lastName || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                    focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                        placeholder=" " 
                        required 
                    />
                    <label 
                        htmlFor="last-name-input" 
                        className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] 
                                   peer-focus:text-teal-600 peer-focus:-translate-y-6 peer-focus:scale-75 
                                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 
                                   peer-placeholder-shown:top-4 peer-placeholder-shown:left-0"
                    >
                        Last Name
                    </label>
                </div>
                
                <button 
                    type="submit" 
                    className="bg-teal-700 text-white w-full rounded-full py-3 px-4 text-lg font-bold shadow-md 
                               transition duration-300 hover:bg-teal-800"
                >
                    Next
                </button>
            </form>
        </FormStepWrapper>
    );
};

// -----------------------------------------------------------------
// 3. Step 3: Status Selection
// -----------------------------------------------------------------
const StatusStep = ({ onNext, onBack, setFormData, formData }) => {
    const statuses = ['Student', 'Working Professional', 'Other'];

    const handleSelect = (status) => {
        setFormData(prev => ({ ...prev, status }));
        onNext();
    };

    const isSelected = (status) => formData.status === status;

    return (
        <FormStepWrapper 
            step={3} 
            title="What's your status?" 
            subtitle="This helps us recommend the most relevant resources."
            onBack={onBack}
        >
            <div className="flex flex-col gap-4 w-full">
                {statuses.map(status => (
                    <button 
                        key={status}
                        type="button"
                        onClick={() => handleSelect(status)}
                        className={`flex justify-between items-center p-4 w-full rounded-xl border-2 transition duration-300 
                                    ${isSelected(status) 
                                        ? 'bg-teal-500 border-teal-500 text-white shadow-lg' 
                                        : 'bg-white border-gray-200 text-gray-800 hover:border-teal-400'
                                    }`}
                    >
                        <span className="text-lg font-semibold">{status}</span>
                        {isSelected(status) && <CheckIcon className="size-6 text-white" />}
                    </button>
                ))}
            </div>
        </FormStepWrapper>
    );
};

// -----------------------------------------------------------------
// 4. Step 4: Password Input
// -----------------------------------------------------------------
const PasswordStep = ({ onNext, onBack, setFormData, formData }) => {
    const [password, setPassword] = useState(formData.password || '');
    const passwordStrength = (p) => {
        if (!p) return 0;
        let score = 0;
        if (p.length >= 8) score++; // Length
        if (/[A-Z]/.test(p)) score++; // Uppercase
        if (/[a-z]/.test(p)) score++; // Lowercase
        if (/\d/.test(p)) score++; // Number
        return score;
    };
    const strength = passwordStrength(password);

    const strengthText = strength === 4 ? "Strong" : strength >= 2 ? "Medium" : "Weak";
    const strengthColor = strength === 4 ? "text-green-600" : strength >= 2 ? "text-yellow-600" : "text-red-600";
    const barColor = strength === 4 ? "bg-green-500" : strength >= 2 ? "bg-yellow-500" : "bg-red-500";

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(prev => ({ ...prev, password }));
        if (strength < 2) {
            alert("Password must be at least medium strength.");
            return;
        }
        onNext(); // Registration is complete
    };

    return (
        <FormStepWrapper 
            step={4} 
            title="Secure your account" 
            subtitle="Create a strong password to protect your privacy."
            onBack={onBack}
        >
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
                {/* Password Input with Floating Label */}
                <div className="relative w-full mb-4 group">
                    <input 
                        type="password" 
                        name="password" 
                        id="password-input" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                    focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                        placeholder=" " 
                        required 
                    />
                    <label 
                        htmlFor="password-input" 
                        className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] 
                                   peer-focus:text-teal-600 peer-focus:-translate-y-6 peer-focus:scale-75 
                                   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 
                                   peer-placeholder-shown:top-4 peer-placeholder-shown:left-0"
                    >
                        Password
                    </label>
                </div>
                
                {/* Password Strength Indicator */}
                <div className="w-full text-left text-sm">
                    <div className="h-1 bg-gray-200 rounded-full mb-1">
                        <div 
                            className={`h-full rounded-full transition-all duration-300 ${barColor}`} 
                            style={{ width: `${(strength / 4) * 100}%` }}
                        ></div>
                    </div>
                    <p className={`font-semibold ${strengthColor}`}>
                        Strength: {strengthText} 
                        {strength < 4 && <span className="text-gray-500"> (Requires 8+ chars, Uppercase, Lowercase, Number)</span>}
                    </p>
                </div>
                
                {/* Finish Button */}
                <button 
                    type="submit" 
                    className="bg-teal-700 text-white w-full rounded-full py-3 px-4 text-lg font-bold shadow-md 
                               transition duration-300 hover:bg-teal-800 mt-6"
                >
                    Finish Registration
                </button>
            </form>
        </FormStepWrapper>
    );
};

// -----------------------------------------------------------------
// 5. Final Register Component (Main Logic)
// -----------------------------------------------------------------
const Register = () => {
    // 0: User Type Select, 1-4: Registration Steps, 5: Completion Screen
    const [currentStep, setCurrentStep] = useState(0); 
    const [formData, setFormData] = useState({});

    const handleSelectClient = () => {
        setCurrentStep(1); // Start registration flow
    };

    const handleNext = () => setCurrentStep(prev => prev + 1);
    const handleBack = () => setCurrentStep(prev => prev - 1);
    
    // --- Helper to render the current step content ---
    const renderStep = () => {
        const stepProps = {
            onNext: handleNext,
            onBack: handleBack,
            setFormData,
            formData,
        };

        switch (currentStep) {
            case 0:
                return (
                    // User Type Selection Screen
                    <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto">
                        <h1 className="text-3xl sm:text-4xl text-teal-900 font-extrabold text-center mb-10">
                            Start your journey to mental wellness
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-6 w-full px-2">
                            <button 
                                className="flex flex-col items-center justify-center p-6 sm:p-8 w-full border-2 border-teal-500 rounded-xl bg-white text-gray-800 shadow-lg transition duration-300 hover:bg-teal-500 hover:text-white hover:shadow-teal-400/50"
                                disabled // Provider flow is not implemented
                            >
                                <h2 className='text-2xl font-bold mb-1'>Health Provider</h2>
                                <p className='text-sm text-gray-500 transition duration-300'>I provide health care</p>
                            </button>
                            <button 
                                className="flex flex-col items-center justify-center p-6 sm:p-8 w-full border-2 border-teal-500 rounded-xl bg-white text-gray-800 shadow-lg transition duration-300 hover:bg-teal-500 hover:text-white hover:shadow-teal-400/50" 
                                onClick={handleSelectClient}
                            >
                                <h2 className='text-2xl font-bold mb-1'>Client</h2>
                                <p className='text-sm text-gray-500 transition duration-300'>I receive health care</p>
                            </button>
                        </div>
                    </div>
                );
            case 1:
                return <EmailStep {...stepProps} />;
            case 2:
                return <NameStep {...stepProps} />;
            case 3:
                return <StatusStep {...stepProps} />;
            case 4:
                return <PasswordStep {...stepProps} />;
            case 5:
                return (
                    <div className="w-full max-w-md bg-white p-12 rounded-2xl shadow-2xl text-center">
                        <h1 className="text-4xl font-extrabold text-teal-800 mb-4">Registration Complete!</h1>
                        <p className="text-xl text-gray-700">
                            Welcome, {formData.firstName || 'New User'}! You are now ready to start your 30-day free trial.
                        </p>
                        <button className="bg-teal-700 text-white rounded-full py-3 px-8 text-lg font-bold shadow-md transition duration-300 hover:bg-teal-800 mt-8">
                            Go to Login 
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-50 font-nunito p-4">
             {/* Global Logo Header */}
            <div className="absolute top-0 w-full max-w-7xl flex justify-start py-6 px-4">
                 <h1 className="text-3xl font-extrabold text-teal-800">InnerCircle</h1> 
            </div>

            {/* Render the current step in the center */}
            <div className="flex-grow flex flex-col items-center justify-center w-full">
                {renderStep()}
            </div>
            
        </div>
    );
};

export default Register;
