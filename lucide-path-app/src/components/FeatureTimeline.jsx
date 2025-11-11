import React from "react";
import { Smile, FileText, BookOpenText } from "lucide-react";

const FeatureTimeline = () => {
  const features = [
    {
      icon: <Smile size={28} className="text-gold" />,
      title: "Mood Tracking",
      description: "Log your daily mood and track trends over time.",
    },
    {
      icon: <FileText size={28} className="text-gold" />,
      title: "Journaling",
      description: "Write your thoughts and reflect on your day.",
    },
    {
      icon: <BookOpenText size={28} className="text-gold" />,
      title: "Resources",
      description: "Access curated guides and tutorials.",
    },
  ];

  return (
    <div className="flex flex-col px-6 py-10 w-full max-w-md mx-auto">
      <h2 className="text-lg font-extrabold text-gold mb-8 text-center">Stay aware, reflect, and grow every day</h2>

      <div className="flex flex-col gap-1 relative">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4 relative">
            {/* Icon and connecting line */}
            <div className="flex flex-col items-center relative">
              {/* Circle Icon */}
              <div className="z-10">
                {feature.icon}
              </div>

              {/* Vertical connecting line */}
              {idx !== features.length - 1 && (
                <div className="w-1 bg-white/20 mt-0" style={{ flexGrow: 1, minHeight: "50px" }}></div>
              )}
            </div>

            {/* Card Content */}
            <div className="bg-white/10 border border-[#1a3a3a] rounded-2xl p-2 flex-1 shadow-md hover:bg-white/20 transition">
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTimeline;
