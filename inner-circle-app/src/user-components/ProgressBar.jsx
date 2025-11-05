import React from "react";

const ProgressBar = ({ label = "Mindfulness Goal", progress = 65, max = 100 }) => {
  // Ensure progress doesn't exceed max
  const safeProgress = Math.min(progress, max);
  const percentage = (safeProgress / max) * 100;

  return (
    <div className="w-full bg-white/10 rounded-xl p-4 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold">{label}</span>
        <span className="text-white font-mono text-sm">{`${safeProgress}/${max}`}</span>
      </div>
      <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-300 to-amber-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-white text-xs mt-1">{percentage.toFixed(0)}% completed</div>
    </div>
  );
};

export default ProgressBar;
