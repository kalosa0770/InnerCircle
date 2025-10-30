import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeHolder from '../assets/hub.jpg'

const cardData = [
    {
        title: "Mindfulness",
        text: "The mind is the greatest assest of a human-being. Get started to know how to.",
        img: placeHolder, 
        accentColor: 'text-orange-400'
    },
    {
        title: "Stress",
        text: "Unlock your inner control, take hold of your stressors today through our curated resources.",
        img: placeHolder,
        accentColor: 'text-emerald-400'
    },
    {
        title: "Depression",
        text: "Dont be a target for mental distress. Know how to handle depression in these five steps",
        img: placeHolder,
        accentColor: 'text-orange-400'
    },
    {
        title: "All in one",
        text: "Offering healthcare through our curated resources to take hold of your daily stressors.",
        img: placeHolder,
        accentColor: 'text-emerald-400'
    },
];

const PopularContent = () => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2.2,
        initialSlide: 0,
        speed: 500,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 2.2,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: "30px",
                    slidesToShow: 1.2,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: false, // Disable center mode on very small screens
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    centerPadding: "0px"
                }
            }
        ]

    };

    return (
        <div className="flex flex-col w-full">
            {/* Header with better contrast */}
            <div className="mb-8 md:mb-12">
                <h1 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
                    Popular on Inner Circle
                </h1>
            </div>

            {/* Slider Container */}
            <div className=" w-full max-w-7xl mx-auto px-2">
                <Slider {...settings}>
                    {cardData.map((card, index) => (
                        <div key={index} className="px-2 md:px-3 py-4 md:py-6 focus:outline-none">
                            {/* Individual Card with glass morphism effect */}
                            <div className="min-h-[220px] md:min-h-[440px] rounded-2xl overflow-hidden shadow-2xl">
                                
                                {/* Image Area */}
                                <div className="w-full h-40 md:h-48 overflow-hidden">
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
                                        <h3 className="text-xl md:text-2xl text-white font-bold">
                                            {card.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-white text-sm md:text-base leading-relaxed mb-4 md:mb-6">
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