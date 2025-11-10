import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Download, BookOpenCheck, CheckIcon, 
        ChevronDownIcon, ChevronUpIcon, ChevronLeft, ChevronRight,
        GraduationCap, Briefcase, HeartHandshake, Users
       } from 'lucide-react';
import { Listbox } from '@headlessui/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import therapist from '../assets/therapist.jpg';
import resources from '../assets/hub.jpg';
import mood from '../assets/mood-tracking.jpg';
import community from '../assets/community-forum.jpg';

import heroBackground from '../assets/hero.jpg';
import icon from '../assets/logo.png';

// ---------- HEADER ----------
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Desktop */}
      <header className='hidden md:flex fixed top-0 z-20 font-nunito w-full py-4 text-white bg-gradient-to-b from-[#0a1f1f] to-[#062b2b] text-center text-2xl font-bold drop-shadow-md'>
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
          <h1 className='text-3xl font-extrabold text-gold'>Lucid Path</h1>
          <nav className='flex items-center space-x-4'>
            <button className='bg-gold text-darkteal rounded-full px-6 py-2 font-bold shadow-md hover:bg-darkgold transition'>Download App</button>
            <Link to="/login">
              <button className='border-2 border-gold rounded-full px-6 py-2 hover:bg-gold hover:text-darkteal transition font-bold'>Login</button>
            </Link>
            <button className='p-2 hover:opacity-80' onClick={toggleMenu}><Menu /></button>
          </nav>
        </div>
      </header>

      {/* Mobile */}
      <header className='flex md:hidden fixed top-0 z-20 font-nunito w-full py-4 bg-teal text-white text-2xl font-bold drop-shadow-md'>
        <div className="flex justify-between items-center w-full px-4">
          <h1 className='text-3xl font-extrabold text-gold'>Lucid Path</h1>
          <button className='p-2 hover:opacity-80' onClick={toggleMenu}><Menu /></button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-black/50 z-30'>
          <div className='fixed inset-y-0 right-0 w-80 max-w-full bg-teal/95 backdrop-blur-sm h-full z-40 flex flex-col p-6 shadow-2xl'>
            <div className="flex justify-between items-center mb-10">
              <h2 className='text-xl font-extrabold text-gold'>Lucid Path</h2>
              <button className='text-white p-2 hover:text-gold' onClick={toggleMenu}><X /></button>
            </div>
            <div className="flex flex-col flex-grow justify-between text-white">
              <nav className='mb-8 space-y-6'>
                {['Who we are for','Features','Resources','Pricing'].map((item) => (
                  <button key={item} className='text-xl hover:text-gold flex items-center transition-colors'>
                    <p>{item}</p> <ArrowRight className='ml-2'/>
                  </button>
                ))}
              </nav>
              <nav className='flex flex-col w-full space-y-4 text-2xl'>
                <button className='bg-gold text-darkteal rounded-full px-8 py-3 text-lg font-bold hover:bg-darkgold transition'>Download App</button>
                <button className='border-2 border-gold rounded-full px-8 py-3 text-lg hover:bg-gold hover:text-darkteal transition'>Login</button>
                <p className='text-sm text-center pt-2'>
                  Do not have an account? <Link to="/register"><button className='text-gold font-extrabold hover:underline'>Sign up</button></Link>
                </p>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ---------- CTA SECTION ----------
const CTASection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity for overlay (max 0.7)
  const overlayOpacity = Math.min(scrollY / 500, 0.7);
    return (
      <section className="relative w-full h-screen">
        {/* Hero Background */}
        <div
          className="absolute inset-0 brightness-75"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "darken",
            opacity: 0.5,
            
          }}
        ></div>
  
        {/* Overlay for slight darkening */}
        <div className="absolute inset-0 bg-gray" style={{ opacity: overlayOpacity, transition: "opacity 1s" }}></div>
  
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 p-8 z-10 flex flex-col items-start">
            <h1 className="text-4xl md:text-6xl font-extrabold text-teal font-nunito mb-4">
            Welcome to Lucid Path
            </h1>
            <p className="text-lg md:text-2xl text-teal max-w-2xl mb-8 font-extrabold">
            Your personal companion for mental wellness, mood tracking, therapy, and community support.
            </p>
            <button className="bg-gold text-teal-900 rounded-full px-8 py-3 text-lg font-bold shadow-lg hover:bg-dark-gold transition duration-300">
            Get Started
            </button>
        </div>
      </section>
    );
};
  

// ---------- ABOUT ----------
const About = () => (
  <section className='flex flex-col md:flex-row items-center p-6 md:p-16 bg-white rounded-xl shadow-lg mt-16 max-w-7xl mx-auto'>
    {/* Image on the left */}
    <div className='w-full md:w-1/2 h-96 md:h-[500px] flex-shrink-0 overflow-hidden rounded-xl shadow-xl mb-6 md:mb-0'>
      <img src={icon} alt="Lucid Path" className='w-full h-full object-cover' />
    </div>

    {/* Text on the right */}
    <div className='w-full md:w-1/2 md:pl-12 text-teal md:p-12'>
      <h2 className='text-3xl md:text-5xl font-extrabold mb-6'>Lucid Path</h2>
      <p className='text-lg md:text-xl leading-relaxed font-semibold'>
        Lucid Path is built for busy individuals seeking mental wellness. Access licensed therapists, mood tracking, and self-help resources instantly. Take control of your mental health journey today with guidance and support tailored for you.
      </p>
    </div>
  </section>
);

// ---------- CARD DATA ----------


// ---------- WHO WE ARE FOR (SLIDER) ----------
const WhoWeAreFor = () => {
  const cards = [
    {
      title: "Students",
      description: "For learners managing study stress and personal growth.",
      icon: <GraduationCap className="w-10 h-10 text-gold mb-3" />,
    },
    {
      title: "Professionals",
      description: "For busy minds balancing ambition, work, and mental clarity.",
      icon: <Briefcase className="w-10 h-10 text-gold mb-3" />,
    },
    {
      title: "Therapists",
      description: "For experts connecting deeply with clients through empathy and tools.",
      icon: <HeartHandshake className="w-10 h-10 text-gold mb-3" />,
    },
    {
      title: "Communities",
      description: "For groups creating safe, empowering spaces to share and heal.",
      icon: <Users className="w-10 h-10 text-gold mb-3" />,
    },
  ];

  return (
    <section className="w-full mx-auto font-nunito py-20 px-6 bg-gradient-to-b from-[#0a1f1f] to-[#062b2b]">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-gold drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]">
        Who Lucid Path Is For
      </h2>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center text-center bg-white/10 backdrop-blur-md border border-gold/20 hover:border-gold/60 rounded-3xl shadow-lg hover:shadow-gold/20 transition-all duration-300 p-8 w-full sm:w-[300px]"
          >
            {/* Decorative glow border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Icon */}
            <div className="relative z-10">{card.icon}</div>

            {/* Text */}
            <h3 className="relative z-10 text-xl font-extrabold text-gold mb-2 group-hover:text-darkgold transition-colors">
              {card.title}
            </h3>
            <p className="relative z-10 text-text-light text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ---------- CONTENT SECTIONS ----------
const SectionContent = ({ title, text, img, reverse }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-8 p-4 ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className='w-full md:w-1/2 text-start'>
      <h2 className='text-2xl font-extrabold text-teal mb-3'>{title}</h2>
      <p className='text-lg text-gray-700 leading-relaxed'>{text}</p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img src={img} alt={title} className="w-full h-full max-h-96 rounded-xl shadow-xl object-cover"/>
    </div>
  </div>
);

// ---------- YOUR TOOLS ----------
const toolOptions = [
  { name: 'Teletherapy', key: 'therapist' },
  { name: 'Resource Hub', key: 'resources' },
  { name: 'Mood & Journaling', key: 'mood' },
  { name: 'Community Support', key: 'community' },
];

const YourTools = () => {
  const [activeTool, setActiveTool] = useState(toolOptions[0].key);
  const [isOpen, setIsOpen] = useState(false);

  const contentMap = { 'Teletherapy':'therapist','Resource Hub':'resources','Mood Tracking':'mood','Journal Dairy':'mood','Community Support':'community'};

  const renderContent = () => {
    switch(activeTool){
      case 'therapist': return <SectionContent title="Teletherapy" text="Connect with licensed therapists online from home." img={therapist}/>;
      case 'resources': return <SectionContent title="Resource Hub" text="Curated articles, guided meditations and advice." img={resources}/>;
      case 'mood': return <SectionContent title="Mood Tracking & Journaling" text="Log daily moods and activities." img={mood}/>;
      case 'community': return <SectionContent title="Community Support" text="Moderated forums and support groups." img={community}/>;
      default: return null;
    }
  };

  const selectedOption = toolOptions.find(o=>o.key===activeTool);

  const getButtonClass = (toolName) => {
    const key = contentMap[toolName];
    const isActive = activeTool === key;
    return `rounded-full py-3 px-5 transition-colors duration-200 shadow-md whitespace-nowrap ${isActive?'bg-gold text-darkteal font-bold ring-2 ring-gold ring-offset-2':'bg-teal text-white hover:bg-darkteal'}`;
  };

  return (
    <section className='bg-gray-50 p-8 md:p-12 w-full rounded-3xl shadow-2xl'>
      <h1 className='text-3xl md:text-5xl text-teal font-extrabold text-center mb-10 font-nunito'>Helpful tools to help you thrive</h1>
      <div className="hidden md:flex bg-teal gap-4 justify-center p-4 rounded-full mb-10 flex-wrap">
        {Object.keys(contentMap).map(tool => <button key={tool} className={getButtonClass(tool)} onClick={()=>setActiveTool(contentMap[tool])}>{tool}</button>)}
      </div>

      <div className="flex md:hidden justify-center mb-8">
        <Listbox value={activeTool} onChange={setActiveTool}>
          <div className="w-full max-w-xs relative">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 shadow-md border-2 border-teal text-teal font-semibold">
              <span className="block truncate">{selectedOption.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">{isOpen?<ChevronUpIcon className="h-5 w-5 text-teal"/>:<ChevronDownIcon className="h-5 w-5 text-teal"/>}</span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg">
              {toolOptions.map(option=>(
                <Listbox.Option key={option.key} value={option.key} className={({active})=>`cursor-default select-none py-2 pl-10 pr-4 rounded-lg mx-2 ${active?'bg-teal-100 text-teal':'text-gray-900'}`}>
                  {({selected})=>(
                    <>
                      <span className={`${selected?'font-bold text-teal':'font-normal'}`}>{option.name}</span>
                      {selected && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal"><CheckIcon className="h-5 w-5"/></span>}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      <div className="mt-8">{renderContent()}</div>
    </section>
  );
};

// ---------- STEPS ----------
const steps = [
  { number: 1, title: "Download the App", description: "Create your account and enjoy 30 days free.", icon:<Download /> },
  { number: 2, title: "Explore Your Tools", description: "Log your daily moods, talk it out, explore resources.", icon:<BookOpenCheck /> },
  { number: 3, title: "Start Thriving", description: "Begin your journey to mental wellness.", icon:<CheckIcon /> },
];

const StepCard = ({step}) => (
  <div className='relative flex flex-col p-6 rounded-xl shadow-lg transform hover:scale-[1.03] bg-white text-teal h-full'>
    <div className="absolute -top-3 -right-3 size-10 flex items-center justify-center bg-white rounded-full text-teal font-extrabold text-xl shadow-md ring-2 ring-gold">{step.number}</div>
    <div className="flex-grow">
      <div className="flex items-center mb-4"><div className="text-3xl mr-4">{step.icon}</div><h3 className='text-xl font-bold'>{step.title}</h3></div>
      <p>{step.description}</p>
    </div>
  </div>
);

const GetStartedSteps = () => (
  <section className="py-16 md:py-24 font-nunito bg-gray">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-sm font-semibold text-gold uppercase tracking-widest">Your Wellness Journey</span>
        <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gold">Three Simple Steps to Get Started</h2>
      </div>
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
        {steps.map(step=><StepCard key={step.number} step={step}/>)}
      </div>
      <div className="mt-16 text-center">
        <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full shadow-2xl text-white bg-gold hover:bg-darkgold transition">Download Now <Download className="ml-2"/></button>
      </div>
    </div>
  </section>
);

// ---------- FOOTER ----------
const Footer = () => {
  const year = new Date().getFullYear();
  const sections = [
    { title:"For Health Providers", links:["Join as a Provider","Provider Resources"] },
    { title:"Company", links:["About Us","Careers","Partner with us","Contact"] },
    { title:"Support", links:["FAQ","Help Center","Trust & Safety"] },
  ];
  return (
    <footer className="bg-teal text-white font-nunito border-t border-gold/50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-x-8">
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <h3 className="text-3xl font-extrabold text-gold">Lucid Path</h3>
            <p className="text-gray-400 text-sm max-w-sm">Your partner for mental wellness. Connect with professionals and explore resources to improve your well-being.</p>
          </div>
          {sections.map(section=>(
            <div key={section.title} className="space-y-4 md:space-y-3">
              <h4 className="text-lg font-bold text-gold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map(link=><li key={link}><a href={`#${link.toLowerCase().replace(/ /g,'-')}`} className="text-gray-400 hover:text-gold transition">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-10 border-gold/50" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 text-sm text-gray-500">
          <p className="text-center md:text-left">&copy; {year} Lucid Path, Inc. All rights reserved. | <a href="#privacy" className="hover:text-gold">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

// ---------- HOME PAGE ----------
const HomePage = () => (
  <div className="font-nunito">
    <Header/>
    <main className="mt-15">
      <CTASection/>
      <About/>
      <WhoWeAreFor/>
      <YourTools/>
      <GetStartedSteps/>
    </main>
    <Footer/>
  </div>
);

export default HomePage;
