import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeHolder from '../assets/hub.jpg'

const cardData = [
    {
        title: "Busy Professionals",
        text: "For those juggling demanding careers and personal lives, InnerCircle offers quick access to mental health support.",
        img: placeHolder, 
        accentColor: 'text-orange-400'
    },
    {
        title: "Students",
        text: "Helping students manage academic stress and personal challenges with on-the-go therapy options.",
        img: placeHolder,
        accentColor: 'text-emerald-400'
    },
    {
        title: "Parents",
        text: "Supporting parents in balancing family responsibilities while prioritizing their mental well-being.",
        img: placeHolder,
        accentColor: 'text-orange-400'
    },
    {
        title: "Health Providers",
        text: "Offering healthcare professionals tools to monitor and support their patients' mental health effectively.",
        img: placeHolder,
        accentColor: 'text-emerald-400'
    },
];

const PopularContent = () => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "0px",
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2.2,
        speed: 500,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerPadding: "40px",
                    slidesToShow: 1.8,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "60px",
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "40px",
                    slidesToShow: 1.2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    centerPadding: "0px",
                }
            }
        ]
    };

    return (
        <div className="flex flex-col w-full">
            {/* Header with better contrast */}
            <div className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
                    Popular on Inner Circle
                </h1>
                <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                    Discover tailored mental health support for different lifestyles and needs
                </p>
            </div>

            {/* Slider Container */}
            <div className="w-full max-w-7xl mx-auto px-2">
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <div key={index} className="px-2 md:px-3 py-4 md:py-6 focus:outline-none">
                            {/* Individual Card with glass morphism effect */}
                            <div className="bg-white/95 backdrop-blur-md min-h-[420px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl 
                                        border-t-4 border-teal-500 transition-all duration-300 
                                        transform hover:scale-[1.02] hover:shadow-teal-400/30
                                        group cursor-pointer hover:bg-white">
                                
                                {/* Image Area */}
                                <div className="w-full h-40 md:h-48 overflow-hidden bg-teal-100/50">
                                    <img 
                                        src={card.img} 
                                        alt={card.title} 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                
                                {/* Text Content Area */}
                                <div className="flex flex-col py-5 md:py-6 px-5 md:px-6">
                                    <div className="flex items-center mb-3">
                                        <div className={`w-3 h-3 rounded-full ${card.accentColor.replace('text', 'bg')} mr-3`}></div>
                                        <h3 className="text-xl md:text-2xl text-teal-800 font-bold">
                                            {card.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                                        {card.text}
                                    </p>
                                    
                                    {/* CTA Button */}
                                    <button className="px-5 md:px-6 py-2 md:py-3 bg-teal-500 text-white rounded-lg 
                                                    hover:bg-teal-600 transition-all duration-200 
                                                    transform hover:scale-105 self-start text-sm md:text-base
                                                    border border-teal-600 hover:border-teal-700">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Custom dots styling for better visibility */}
            <style jsx>{`
                :global(.slick-dots) {
                    bottom: -40px;
                }
                :global(.slick-dots li button:before) {
                    font-size: 10px;
                    color: #e0f2fe;
                    opacity: 0.6;
                }
                :global(.slick-dots li.slick-active button:before) {
                    color: #ffffff;
                    opacity: 1;
                }
                :global(.slick-slide) {
                    transition: transform 0.3s ease;
                }
                :global(.slick-center) {
                    transform: scale(1.05);
                    z-index: 1;
                }
            `}</style>
        </div>
    );
};

export default PopularContent;