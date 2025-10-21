import React, {useState} from 'react';
import { Menu, Minus, X, ArrowRight} from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import providers from '../assets/providers.jpg';
import students from '../assets/students.jpg';
import busyProfessionals from '../assets/busy-professionals.jpg';
import parents from '../assets/parents.jpg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            {/* // This header is visible on medium screens and up (md:flex) */}
            <header className='hidden md:flex fixed top-0 z-20 font-nunito w-full py-4 bg-teal-800 text-white text-center text-2xl font-bold drop-shadow-md'>
                {/* Full-width container with max-width for desktop, centered content, and proper spacing */}
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
                    <div className="flex items-center">
                        <h1 className='text-3xl font-extrabold'>InnerCircle</h1>
                    </div>
                    <nav className='flex items-center text-lg space-x-4'>
                        <button className='hover:bg-teal-700 hover:text-white bg-white text-teal-900 rounded-full px-6 py-2 transition duration-300 ease-in-out cursor-pointer shadow-md'>
                            Download App
                        </button>
                        <button className='border-2 border-white rounded-full px-6 py-2 cursor-pointer hover:bg-white hover:text-teal-900 transition duration-300 ease-in-out'>
                            Login
                        </button>
                        {/* Reduced the margin for better spacing */}
                        <button className='hover:opacity-80 p-2 cursor-pointer' onClick={toggleMenu}><Menu /></button>
                    </nav>
                </div>
            </header>

            {/* // This header is visible on small screens (md:hidden) */}
            <header className='flex md:hidden fixed top-0 z-20 font-nunito w-full py-4 bg-teal-800 text-white text-2xl font-bold drop-shadow-md'>
                {/* Full-width container with proper spacing */}
                <div className="flex justify-between items-center w-full px-4">
                    <div className="flex items-center">
                        <h1 className='text-3xl font-extrabold'>Inner Circle</h1>
                    </div>
                    <nav className='flex items-center text-lg'>
                        {/* Removed extra margin for tighter alignment */}
                        <button className='hover:opacity-80 p-2' onClick={toggleMenu}><Menu /></button>
                    </nav>
                </div>
            </header>
            {/* Menu Overlay for small screens */}
            {isMenuOpen && (
                <div className='fixed absolute inset-y-0 right-0 w-75 md:w-100 bg-teal-800 h-max rounded-s-2xl bg-opacity-75 z-30 flex flex-col font-nunito p-4 menuBarSlideIn'>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className='text-xl font-extrabold text-white '>InnerCircle</h2>
                        <button className='hover:opacity-80 p-2 text-white ' onClick={toggleMenu}><X /></button> 
                    </div>
                    <div className="flex flex-col h-full items-start justify-start space-y-10 mt-10 text-white p-4 w-full">
                        <nav className='mb-8 w-full'>
                            <div className="flex flex-col gap-4 items-start justify-start">
                                <button className='text-xl hover:text-amber-500 flex items-center'><p>Who we are for</p> <ArrowRight /></button>
                                <button className='text-xl hover:text-amber-500 flex items-center'><p>Features </p><ArrowRight /></button>
                                <button className='text-xl hover:text-amber-500 flex items-center'><p>Resources</p> <ArrowRight /></button>
                                <button className='text-xl hover:text-amber-500 flex items-center'><p>Pricing</p> <ArrowRight /></button>
                            </div>
                        </nav>
                        <nav className='flex flex-col w-full space-y-6 text-2xl mt-40'>
                            <button className='bg-white text-teal-900 rounded-full px-8 py-3 text-lg font-bold hover:bg-teal-900 hover:text-white transition duration-300 ease-in-out cursor-pointer shadow-md'>
                                Download App
                            </button>
                            <button className='border-2 border-white rounded-full px-8 py-3 text-lg cursor-pointer hover:bg-white hover:text-teal-900 transition duration-300 ease-in-out'>
                                Login
                            </button>
                            <p className='text-sm text-center'>Do not have an account? <button className='text-amber-500 font-extrabold cursor-pointer'>Sign up</button></p>
                        </nav>
                    </div>
                </div>
            )}
        </>
        
        
    );
}


const CTASection = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center text-white font-nunito py-4 px-6 md:px-15 lg:px-20'>
            <h2 className='text-2xl mb-4 md:text-4xl text-center font-extrabold'>Inner Circle—Always there. Always for you.</h2>
            <p className='text-sm md:text-lg mb-6 text-center font-nunito'>
                Get personalized 24/7 support, track your mood, 
                talk your thoughts out, have insightful feedback from health providers and enjoy your mental wellbeing.
            </p>  
            <button className='bg-white md:w-50 w-full  text-teal-900 rounded-full p-4 text-lg font-bold hover:bg-teal-900 hover:text-white transition delay-150 duration-300 ease-in-out cursor-pointer'>
                Get Started <ArrowRight className='inline ml-2'/>
            </button>
        </section>
    );
}

const About = () => {
    return (
        <section className='w-full flex flex-col font-nunito mt-5 bg-white bg-opacity-10 p-6 rounded-t-4xl items-center justify-center'>
            
            <p className='md:text-2xl text-xl md:leading-10 text-center max-w-4xl text-orange-400 font-semibold text-center'>
                InnerCircle is a mental health app built specifically for overcommitted busy scheduled individuals.  
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
        <section className="w-full mx-auto font-nunito gap-4 py-10">
            {/* Header: Centered and visually strong */}
            <h2 className='text-2xl md:text-4xl font-extrabold text-white text-center mb-10 font-nunito'>
                Who InnerCircle Is For
            </h2>
            
            {/* Slider Container: Apply padding and ensure text is visible */}
            <div className="container mt-10 mx-auto px-4 font-nunito">
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <div key={index} className='bg-white h-[450px] rounded-2xl shadow-xl'>
                                <div className="items-center justify-center flex bg-white p-2 mb-4 h-56">
                                    {<img src={card.img} alt={card.title} className="w-44 h-44 rounded-2xl"/>}
                                </div>
                                <div className="flex flex-col py-4 px-4">
                                    <h3 className='text-xl md:text-2xl text-teal-900 font-bold mb-3'>
                                        {card.title}
                                    </h3>
                                    
                                    <p className='text-gray-600 text-base'>
                                        {card.text}
                                    </p>
                                </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

const YourTools = () => {
    const [selectedTool, setSelectedTool] = useState(true);
    const [resources, setResources] = useState(false);


    const toolClick = (tool) => {
        if (tool === setSelectedTool(!selectedTool)) {
            <div className='text-gray-900'>
                            <h1 className='text-gray-900'>Connect with expert health providers</h1>
                            <p>Get personalized help and support from expert therapists on a video and audio call consultation</p>
                        </div>
        } else if (tool === setResources(!resources)) {
            return (
                <div>
                    <h1>
                        Resources content here
                    </h1>
                </div>
            )
        }
        
    }

    
    return (
         <section className='bg-gray-50 items-center justify-center p-8 w-full rounded-4xl'>
            <h1 className='md:text-4xl text-2xl text-teal-900 font-bold font-nunito text-center'>Helpful tools to help you thrive</h1>
            <div className="flex bg-teal-900 gap-4 md:gap-6 flex-wrap justify-center items-center mt-6 p-6 rounded-full mx-auto text-white text-sm md:text-lg font-semibold">
                <button className='rounded-full bg-teal-700 text-white py-3 px-4' onClick={toolClick}>Teletherapy</button>
                <button className='rounded-full bg-teal-700 text-white py-3 px-4' onClick={toolClick}>Resource Hub</button>
                <button className='rounded-full bg-teal-700 text-white py-3 px-4' onClick={toolClick}>Mood Tracking</button>
                <button className='rounded-full bg-teal-700 text-white py-3 px-4' onClick={toolClick}>Journal Dairy</button>
                <button className='rounded-full bg-teal-700 text-white py-3 px-4' onClick={toolClick}>Community Support</button>
            </div>
            <div>
                    {selectedTool
                        
                        
                    }
                </div>
        </section>
    );
}


function HomePage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-teal-900 font-nunito'>
      <Header />
      <main className='flex-grow flex flex-col mt-40 text-white gap-10 w-full md:p-10 p-5'>
        <CTASection />
        <About />
        <WhoWeAreFor />
        <YourTools />
      </main>
    </div>
  );
}

export default HomePage;