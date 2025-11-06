import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Minus, X, ArrowRight, ChevronDownIcon, CheckIcon, ChevronUpIcon, Download, BookOpenCheck, Zap, InstagramIcon, FacebookIcon, LinkedinIcon } from 'lucide-react';
import { Listbox } from '@headlessui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import providers from '../assets/providers.jpg';
import students from '../assets/students.jpg';
import busyProfessionals from '../assets/busy-professionals.jpg';
import parents from '../assets/parents.jpg';
import therapist from '../assets/therapist.jpg';
import resources from '../assets/hub.jpg';
import mood from '../assets/mood-tracking.jpg';
import community from '../assets/community-forum.jpg';


import Register from './Register';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
       <>
    {/* // Desktop Header (md:flex) */}
    <header className='hidden md:flex fixed top-0 z-20 font-nunito w-full py-4 bg-teal-800 text-white text-center text-2xl font-bold drop-shadow-md'>
        {/* Full-width container with max-w for desktop, centered content, and proper spacing */}
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
            <div className="flex items-center">
                <h1 className='text-3xl font-extrabold'>InnerCircle</h1>
            </div>
            <nav className='flex items-center text-lg space-x-4'>
                <button className='hover:bg-teal-700 hover:text-white bg-white text-teal-900 rounded-full px-6 py-2 transition duration-300 ease-in-out cursor-pointer shadow-md'>
                    Download App
                </button>
                <Link  to="/login" >
                    <button className='border-2 border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-teal-900 transition duration-300 ease-in-out'>
                        Login
                    </button>
                </Link>
                <button className='hover:opacity-80 p-2 cursor-pointer' onClick={toggleMenu}><Menu /></button>
            </nav>
        </div>
    </header>

    {/* // Mobile Header (md:hidden) */}
    <header className='flex md:hidden fixed top-0 z-20 font-nunito w-full py-4 bg-teal-800 text-white text-2xl font-bold drop-shadow-md'>
        {/* Full-width container with proper spacing */}
        <div className="flex justify-between items-center w-full px-4">
            <div className="flex items-center">
                <h1 className='text-3xl font-extrabold'>Inner Circle</h1>
            </div>
            <nav className='flex items-center text-lg'>
                <button className='hover:opacity-80 p-2 cursor-pointer' onClick={toggleMenu}><Menu /></button>
            </nav>
        </div>
    </header>
    
    {/* Menu Overlay for small screens (Fixed and Styled) */}
    {isMenuOpen && (
        <div className='fixed inset-0 bg-black/50 z-30'> 
            {/* Menu Drawer: Fixed width, full height, rich background, slide effect */}
            <div className='fixed inset-y-0 right-0 w-80 max-w-full bg-teal-900/95 backdrop-blur-sm h-full z-40 flex flex-col font-nunito p-6 shadow-2xl transition-transform duration-300 transform translate-x-0'>
                
                {/* Menu Header (Logo and Close Button) */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className='text-xl font-extrabold text-white '>InnerCircle</h2>
                    <button className='hover:text-teal-300 p-2 text-white ' onClick={toggleMenu}><X /></button> 
                </div>
                
                {/* Navigation and CTAs Container: Uses flex-grow to manage vertical space */}
                <div className="flex flex-col flex-grow items-start justify-between text-white w-full">
                    
                    {/* Primary Navigation Links */}
                    <nav className='mb-8 w-full space-y-6'>
                        <div className="flex flex-col gap-4 items-start justify-start">
                            <button className='text-xl hover:text-amber-300 flex items-center transition-colors'><p>Who we are for</p> <ArrowRight /></button>
                            <button className='text-xl hover:text-amber-300 flex items-center transition-colors'><p>Features </p><ArrowRight /></button>
                            <button className='text-xl hover:text-amber-300 flex items-center transition-colors'><p>Resources</p> <ArrowRight /></button>
                            <button className='text-xl hover:text-amber-300 flex items-center transition-colors'><p>Pricing</p> <ArrowRight /></button>
                        </div>
                    </nav>
                    
                    {/* CTA Buttons (Pushed to bottom by flex-grow) */}
                    <nav className='flex flex-col w-full space-y-4 text-2xl'>
                        <button className='bg-white text-teal-900 rounded-full px-8 py-3 text-lg font-bold hover:bg-teal-100 transition duration-300 ease-in-out cursor-pointer shadow-lg'>
                            Download App
                        </button>
                        <button className='border-2 border-white rounded-full px-8 py-3 text-lg cursor-pointer hover:bg-white hover:text-teal-900 transition duration-300 ease-in-out'>
                            Login
                        </button>
                        <p className='text-sm text-center pt-2'>
                            Do not have an account? <Link to="/register">
                            <button className='text-amber-300 font-extrabold cursor-pointer hover:underline'>Sign up</button>
                            </Link>

                        </p>
                    </nav>
                </div>
            </div>
        </div>
    )}
</>

        
        
    );
}


const CTASection = () => {
    return (
        <section className='w-full py-16 px-4 md:py-24 bg-teal-900 shadow-2xl'>
            {/* Content Container: Constrained width and centered */}
            <div className='max-w-4xl mx-auto flex flex-col items-center justify-center text-white font-nunito'>
                
                <h2 className='text-3xl mb-4 md:text-5xl text-center font-extrabold tracking-tight'>
                    Inner Circle—Always there. Always for you.
                </h2>
                
                <p className='text-base md:text-xl mb-8 text-center font-light max-w-2xl'>
                    Get personalized 24/7 support, track your mood, 
                    talk your thoughts out, have insightful feedback from health providers, and start enjoying your mental well-being.
                </p> 
                
                {/* Call to Action Button: Fixed the width issue and added modern shadow */}
                <button 
                    className='bg-white w-full max-w-sm text-teal-900 rounded-full py-4 px-12 text-xl font-bold 
                            shadow-xl transition duration-300 ease-in-out cursor-pointer 
                            hover:bg-teal-700 hover:text-white hover:shadow-2xl'
                >
                    Get Started <ArrowRight className='inline ml-2 size-5'/>
                </button>
                
            </div>
        </section>
    );
}

const About = () => {
    return (
        <section className='w-full flex flex-col font-nunito mt-5 bg-gray-50 p-8 md:p-12 lg:p-16 rounded-3xl items-center justify-center shadow-inner'>
    
            <p className='text-xl md:text-3xl text-center max-w-5xl text-teal-800 font-extrabold md:leading-relaxed'>
                {/* Added a strong highlight word for impact */}
                The InnerCircle is built specifically for overcommitted, busy individuals. 
                We deliver daily support by providing instant access to licensed therapists, self-help resources, and mood tracking features.
            </p> 
            
        </section>
    );
}

 // Placeholder for your images - use the suggested Tailwind accent colors
    // teal-900 (background), emerald-400 (sage green), orange-400 (coral)
    const cardData = [
        {
            title: "Busy Professionals",
            text: "For those juggling demanding careers and personal lives, InnerCircle offers quick access to mental health support.",
            // Placeholder for an SVG/Image component here
            img: busyProfessionals, 
            accentColor: 'text-orange-400'
        },
        {
            title: "Students",
            text: "Helping students manage academic stress and personal challenges with on-the-go therapy options.",
            img: students,
            accentColor: 'text-emerald-400'
        },
        {
            title: "Parents",
            text: "Supporting parents in balancing family responsibilities while prioritizing their mental well-being.",
            img: parents,
            accentColor: 'text-orange-400'
        },
        {
            title: "Health Providers",
            text: "Offering healthcare professionals tools to monitor and support their patients' mental health effectively.",
            img: providers,
            accentColor: 'text-emerald-400'
        },
    ];


const WhoWeAreFor = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
    };

    return (
        <section className="w-full mx-auto font-nunito py-16 px-4 bg-teal-900">
    <div className='w-full mx-auto'>
        
        {/* Header: Centered and visually strong */}
        <h2 className='text-3xl md:text-5xl font-extrabold text-white text-center mb-16 tracking-tight'>
            Who InnerCircle Is For
        </h2>
        
        {/* Slider Container: Ensures max width and proper spacing */}
        <div className="mx-auto font-nunito">
            <Slider {...settings}>
                {cardData.map((card, index) => (
                    <div key={index} className='p-4'>
                        {/* Individual Card: Enhanced Styling */}
                        <div className='bg-white min-h-[480px] rounded-2xl overflow-hidden shadow-2xl 
                                        border-t-4 border-teal-500 transition-all duration-300 
                                        transform hover:scale-[1.03] hover:shadow-teal-400/50'>
                            
                            {/* Image Area: Clean container for the image */}
                            <div className="w-full h-full overflow-hidden flex items-center justify-center bg-teal-50/70">
                                <img 
                                    src={card.img} 
                                    alt={card.title} 
                                    // object-cover ensures the image fills the dedicated space without stretching
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Text Content Area */}
                            <div className="flex flex-col py-6 px-6">
                                <h3 className='text-2xl text-teal-800 font-extrabold mb-2'>
                                    {card.title}
                                </h3>
                                
                                <p className='text-gray-700 text-base leading-relaxed'>
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
</section>
    );
}



// --- Content Components (Remain unchanged - assume they are imported or defined above) ---
const TherapistContent = () => (
    // Outer Flex Container: Stacks vertically on mobile, splits into two columns on medium screens and up
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-8 p-4">
        <div className='w-full md:w-1/2 w-2/4 order-2 md:order-1 text-start order-1 md:order-1'>
            <h2 className='text-2xl font-extrabold text-teal-800 mb-3'>Teletherapy</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
                Connect with licensed therapists online for personalized, secure care right from the comfort of your home. Schedule sessions that fit your busy life.
            </p>
        </div>
        
        {/* Image / Visual Box (Takes full width on mobile, half on desktop) */}
        <div className="w-full flex justify-center items-center order-2 md:order-2">
            <img 
                src={therapist} 
                alt="Illustration of a therapist session" 
                // Styles to make image clean and responsive
                className="w-full h-full max-h-96 rounded-xl shadow-xl object-cover" 
            />
        </div>
    </div>
);

// ---------------------------------------------------------
// Resource Content (Using the same responsive pattern)
// ---------------------------------------------------------
const ResourceContent = () => (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-8 p-4">
        
        {/* Text Box */}
        <div className='w-full md:w-1/2 w-2/4 order-2 md:order-1 text-start order-1 md:order-1'>
            <h2 className='text-2xl font-extrabold text-teal-800 mb-3'>Resource Hub</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
                Access curated articles, guided meditations, and expert advice for proactive, self-guided well-being. Your library of calm, available instantly.
            </p>
        </div>
        
        {/* Image Box */}
        <div className="w-full flex justify-center items-center order-2 md:order-2">
            <img 
                src={resources} 
                alt="Illustration of resources and self-help tools" 
                className="w-full h-full max-h-96 rounded-xl shadow-xl object-cover" 
            />
        </div>
    </div>
);

// ---------------------------------------------------------
// Mood Content (Same pattern, but swapping the order of text/image for variety)
// ---------------------------------------------------------
const MoodContent = () => (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-8 p-4">
        <div className='w-full md:w-1/2 w-2/4 order-2 md:order-1 text-start order-1 md:order-1'>
            <h2 className='text-2xl font-extrabold text-teal-800 mb-3'>Mood Tracking & Journaling</h2>
            <p className='text-lg text-gray-700 leading-relaxed'>
                Log your daily moods and activities to identify patterns and triggers for better mental health management and self-awareness.
            </p>
        </div>

        <div className="w-full flex justify-center items-center order-2 md:order-2">
            <img 
                src={mood} 
                alt="Illustration of mood tracking on a phone" 
                className="w-full h-full max-h-96 rounded-xl shadow-xl object-cover" 
            />
        </div>
    </div>
);

// ---------------------------------------------------------
// Community Content (Same pattern as Mood Content)
// ---------------------------------------------------------
const CommunityContent = () => (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-8 p-4">
        <div className='w-full md:w-1/2 w-2/4 order-2 md:order-1 text-start order-1 md:order-1'>
            <h2 className='text-2xl font-extrabold text-teal-800 mb-3'>Community Support</h2>
            <p className='text-2l text-gray-700 leading-relaxed'>
                Join moderated forums and support groups to share experiences and gain insights from others on similar wellness journeys.
            </p>
        </div>

        <div className="w-full flex justify-center items-center order-2 md:order-2">
            <img 
                src={community} 
                alt="Illustration of a community forum group" 
                className="w-full h-auto max-h-96 rounded-xl shadow-xl object-cover" 
            />
        </div>
    </div>
);

// --- Data Mapping ---
const contentMap = {
    'Teletherapy': 'therapist',
    'Resource Hub': 'resources',
    'Mood Tracking': 'mood',
    'Journal Dairy': 'mood',
    'Community Support': 'community',
};

// Map of unique tool keys for the dropdown options
const toolOptions = [
    { name: 'Teletherapy', key: 'therapist' },
    { name: 'Resource Hub', key: 'resources' },
    { name: 'Mood & Journaling', key: 'mood' },
    { name: 'Community Support', key: 'community' },
];

const YourTools = () => {
    const [activeTool, setActiveTool] = useState(toolOptions[0].key); // Initialize with the first tool key
    const [isOpen, setIsOpen] = useState(false);



    const handleToolChange = (value) => {
        // This function handles both Listbox selection (gets the value directly) and button click
        setActiveTool(value);
         // Close the Listbox when an option is selected
    }

    const changeIcon = () => {
        setIsOpen(!isOpen);
    }
    
    const renderContent = () => {
        switch (activeTool) {
            case 'therapist':
                return <TherapistContent />;
            case 'resources':
                return <ResourceContent />;
            case 'mood':
                return <MoodContent />;
            case 'community':
                return <CommunityContent />;
            default:
                return <TherapistContent />;
        }
    };
    
    // Find the currently selected option object for the Listbox button display
    const selectedOption = toolOptions.find(option => option.key === activeTool) || toolOptions[0];

    const getButtonClass = (toolName) => {
        // ... (Desktop button logic, essentially unchanged)
        const key = contentMap[toolName];
        const isActive = activeTool === key;
        let classes = 'rounded-full py-3 px-5 transition-colors duration-200 shadow-md whitespace-nowrap ';
        
        if (isActive) {
            classes += 'bg-white text-teal-900 font-bold ring-2 ring-white ring-offset-2 ring-offset-teal-900';
        } else {
            classes += 'bg-teal-700 text-white hover:bg-teal-600';
        }
        return classes;
    }

    return (
        <section className='bg-gray-50 p-8 md:p-12 w-full w-full mx-auto rounded-3xl shadow-2xl'>
            <h1 className='text-3xl md:text-5xl text-teal-900 font-extrabold font-nunito text-center mb-10'>
                Helpful tools to help you thrive
            </h1>
            
            {/* 1. Desktop Tab/Button Navigation (Hidden on mobile) */}
            <div className="hidden md:flex bg-teal-900 gap-3 md:gap-4 flex-wrap justify-center p-4 rounded-full mx-auto text-sm md:text-base mb-10">
                {Object.keys(contentMap).map((toolName) => (
                    <button 
                        key={toolName}
                        className={getButtonClass(toolName)}
                        onClick={() => handleToolChange(contentMap[toolName])}
                    >
                        {toolName}
                    </button>
                ))}
            </div>
            
            {/* 2. Mobile Headless UI Listbox (Hidden on desktop) */}
            <div className="flex md:hidden justify-center mb-8 relative z-10">
                <Listbox value={activeTool} onChange={handleToolChange}>
                    <div className="w-full max-w-xs">
                        <Listbox.Button onClick={changeIcon} className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-600 sm:text-lg border-2 border-teal-800 text-teal-900 font-semibold">
                            <span className="block truncate">{selectedOption.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                {isOpen ? (
                                    <ChevronUpIcon className="h-5 w-5 text-teal-900" aria-hidden="true" />
                                ) : (
                                    <ChevronDownIcon className="h-5 w-5 text-teal-900" aria-hidden="true" />
                                )}
                            </span>
                        </Listbox.Button>

                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-lg">
                            {toolOptions.map((option) => (
                                <Listbox.Option
                                    key={option.key}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 mt-1 rounded-lg mx-2 text-md transition-colors duration-150 ease-in-out ${
                                            active ? 'bg-teal-100 text-teal-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={option.key}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                // ------------------------------------------------------------------
                                                // 🎉 YOUR CUSTOM STYLING IS APPLIED TO THE OPTION SPAN/DIV HERE 🎉
                                                // ------------------------------------------------------------------
                                                className={`block truncate ${
                                                    selected ? 'font-bold text-teal-800' : 'font-normal'
                                                }`}
                                            >
                                                {option.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </div>
                </Listbox>
            </div>

            {/* Content Display Area */}
            <div className="mt-8 min-h-[250px] flex items-center justify-center">
                {renderContent()}
            </div>
        </section>
    );
}


const steps = [
    {
        number: 1,
        title: "Download the App",
        description: "Get the Inner Circle app, create your account and enjoy 30 days free.",
        icon: <Download /> 
    },
    {
        number: 2,
        title: "Explore Your Tools",
        description: "Once your trial ends, pick your preferred plan, log your daily moods, talk it out and explore personalized helpful resources.",
        icon: <BookOpenCheck />
    },
    {
        number: 3,
        title: "Start Thriving",
        description: "After you are geared up, begin your journey to mental wellness and let your mindset speak for itself.",
        icon: <CheckIcon />
    },
];

const StepCard = ({ step }) => {
    // Determine gradient colors for a visual path effect
    // const gradientFrom = step.number === 1 ? 'from-teal-600' : 
    //                      step.number === 2 ? 'from-teal-700' : 
    //                      step.number === 3 ? 'from-teal-900' : 
    //                                         'from-teal-800';
    
    // const gradientTo = step.number === 3 ? 'to-teal-900' : 'to-teal-700';

    return (
        <div className={`relative flex flex-col p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] text-teal-900 bg-white h-full`}>
            
            {/* Step Number Badge */}
            <div className="absolute -top-3 -right-3 size-10 flex items-center justify-center bg-white rounded-full text-teal-800 font-extrabold text-xl shadow-md ring-2 ring-teal-500">
                {step.number}
            </div>

            <div className="flex-grow">
                <div className="flex items-center justify-start mb-4">
                    <div className="text-3xl mr-4">{step.icon}</div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-teal-900">{step.description}</p>
            </div>
            
            
            {/* Optional: Add a subtle separator for the path effect on desktop */}
            {step.number < 3 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-full h-1 w-12 bg-teal-300/50"></div>
            )}
        </div>
    );
};

const GetStartedSteps = () => {
    return (
        <section className="py-16 md:py-24   items-center justify-center mx-auto  w-full font-nunito px-4">
            <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-sm font-semibold text-white uppercase tracking-widest">Your Wellness Journey</span>
                    <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
                        Three Simple Steps to Get Started
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-12 relative">
                    {steps.map((step) => (
                        <StepCard key={step.number} step={step} />
                    ))}
                </div>

                {/* Final CTA Button */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-2xl text-white bg-teal-600 hover:bg-teal-700 transition duration-300 transform hover:-translate-y-0.5">
                        Download Now <Download className="ml-2" />
                    </button>
                </div>

            </div>
        </section>
    );
};

const Footer = () => {
    const year = new Date().getFullYear();

    const sections = [
        {
            title: "For Health Providers",
            links: ["Join as a Provider", "Provider Resources"]
        },
        {
            title: "Company",
            links: ["About Us", "Careers", "Partner with us", "Contact"]
        },
        {
            title: "Support",
            links: ["FAQ", "Help Center", "Trust & Safety"]
        },
    ];

    return (
        <footer className="bg-gray-900 text-white font-bold font-nunito border-t border-teal-800/50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                
                {/* Main Grid: Logo, Links, and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-y-10 md:gap-x-8">
                    
                    {/* Column 1: Logo and Mission */}
                    <div className="md:col-span-2 lg:col-span-2 space-y-4">
                        <h3 className="text-3xl font-extrabold text-teal-400">Inner Circle</h3>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Your dedicated partner for mental wellness. Providing instant access to professional care and personalized resources for busy individuals.
                        </p>
                    </div>

                    {/* Columns 2, 3, 4: Navigation Links (Responsive) */}
                    {sections.map((section) => (
                        <div key={section.title} className="space-y-4 md:space-y-3">
                            <h4 className="text-lg font-bold text-teal-500 mb-3">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a 
                                            href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
                                            className="text-gray-400 hover:text-teal-400 text-base transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    
                </div>
                
                <hr className="my-10 border-teal-800/50" />
                
                {/* Bottom Row: Legal & Social Media */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
                    
                    {/* Legal Info */}
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        &copy; {year} Inner Circle, Inc. All rights reserved. | <a href="#privacy" className="hover:text-teal-400">Privacy Policy</a> | <a href="#terms" className="hover:text-teal-400">Terms of Service</a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6">
                        <a href="#facebook" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                            <FacebookIcon className="h-6 w-6" />
                        </a>
                        <a href="#twitter" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                            <LinkedinIcon className="h-6 w-6" />
                        </a>
                        <a href="#instagram" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                            <InstagramIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};



function HomePage() { 
  return (
    <>
   
    
        <div className='min-h-screen flex flex-col items-center justify-center bg-teal-900 font-nunito'>
            <Header />
            <main className='flex-grow flex flex-col mt-20 text-white gap-10 w-full md:p-10 p-5'>
                <CTASection />
                <About />
                <WhoWeAreFor />
                <YourTools />
                <GetStartedSteps />
                
            </main>
            <Footer />
        </div>
    
    </>
  );
}

export default HomePage;