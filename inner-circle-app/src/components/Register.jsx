import React, {useState} from "react";

const ClientForm = () => {
    return (
       <div className="flex flex-col w-full items-center justify-center font-nunito p-4">
    
    <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">

        {/* --- PROGRESS BAR: STEP 1 OF 4 --- */}
        <div className="flex justify-between w-full mb-8 space-x-2">
            {/* Active Step */}
            <div className="h-2 w-1/4 bg-teal-600 rounded-full shadow-inner"></div> 
            {/* Inactive Steps */}
            <div className="h-2 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-2 w-1/4 bg-gray-200 rounded-full"></div>
            <div className="h-2 w-1/4 bg-gray-200 rounded-full"></div>
        </div>
        {/* --- END PROGRESS BAR --- */}
        
        {/* Header and Offer */}
        <h1 className="text-4xl font-extrabold text-teal-800 mb-2 text-center">Let's get started</h1>
        <p className="text-base text-gray-500 mb-8 text-center">
            Your 30-day free trial awaits—no credit card needed!
        </p>
        
        {/* Form Container */}
        <form className="flex flex-col items-center gap-6 w-full">
            
            {/* Input with Floating Label Effect */}
            <div className="relative w-full mb-4 group">
                <input 
                    type="email" 
                    name="email" 
                    id="email-input" 
                    // Styled for bottom border only, focus styles for interaction
                    className="block w-full py-3 px-0 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                    placeholder=" " // Crucial: Placeholder must be a single space for the CSS sibling selector trick
                    required 
                />
                
                {/* The Floating Label Element (moved from placeholder) */}
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
            
            {/* Submit Button */}
            <button 
                type="submit" 
                className="bg-teal-700 text-white w-full rounded-full py-3 px-4 text-lg font-bold shadow-md 
                           transition duration-300 hover:bg-teal-800"
            >
                Next
            </button>
        </form>
    </div>
</div>
    )
}

const Register = () => {

    const [registerContent, setRegisterContent] = useState(true);

    const [selectClient, setSelectClient] = useState(false);

    const showClientForm = () => {
        setSelectClient(!selectClient);
        setRegisterContent(!registerContent);
    }
    

    return (
       <>
       <div className="flex bg-white font-nunito p-4 sm:p-6">
    
            {/* Header/Logo Section: Fixed position for clarity */}
            <div className="w-full max-w-lg flex justify-start py-6">
                {/* Corrected the invalid class string and made the logo pop */}
                <h1 className="text-3xl font-extrabold text-teal-800">InnerCircle</h1> 
            </div>
        </div>
       {registerContent &&
       
       <div className="flex flex-col bg-white font-nunito p-4 sm:p-6">

            {/* Main Content Area: Centered vertically */}
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md mx-auto">
                
                {/* Prompt/Title */}
                <h1 className="text-3xl sm:text-4xl text-teal-900 font-extrabold text-center mb-10">
                    Start your journey to mental wellness
                </h1>
                
                {/* Selection Buttons Container */}
                <div className="flex flex-col gap-6 w-full px-2">
                    
                    {/* Health Provider Button */}
                    <button className="flex flex-col items-center justify-center p-6 sm:p-8 w-full 
                                        border-2 border-teal-500 rounded-4xl bg-white text-gray-800 
                                        shadow-lg transition duration-300 ease-in-out cursor-pointer 
                                        hover:bg-teal-500 hover:text-white hover:shadow-teal-400/50">
                        
                        <h2 className='text-2xl font-bold mb-1'>Health Provider</h2>
                        <p className='text-sm text-gray-500 hover:text-white transition duration-300'>I provide health care</p>
                    </button>
                    
                    {/* Client Button */}
                    <button className="flex flex-col items-center justify-center p-6 sm:p-8 w-full 
                                        border-2 border-teal-500 rounded-4xl bg-white text-gray-800 
                                        shadow-lg transition duration-300 ease-in-out cursor-pointer 
                                        hover:bg-teal-500 hover:text-white hover:shadow-teal-400/50" onClick={showClientForm}>
                        
                        <h2 className='text-2xl font-bold mb-1'>Client</h2>
                        <p className='text-sm text-gray-500 hover:text-white transition duration-300'>I receive health care</p>
                    </button>
                </div>
            </div>
        </div>
        }
       {selectClient && <ClientForm />}
       </>
    );
}

export default Register;