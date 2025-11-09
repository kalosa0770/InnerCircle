import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mood mapping for emoji and color
const moodMap = {
  1: { emoji: "😞", color: "#FF4C4C" },
  2: { emoji: "😐", color: "#FFA500" },
  3: { emoji: "🙂", color: "#FFD700" },
  4: { emoji: "😃", color: "#7CFC00" },
  5: { emoji: "🥳", color: "#00BFFF" },
};

// Sample data
const sampleData = [
  { date: "2025-11-01", mood: 3 },
  { date: "2025-11-02", mood: 4 },
  { date: "2025-11-03", mood: 2 },
  { date: "2025-11-04", mood: 5 },
  { date: "2025-11-05", mood: 4 },
];

// Custom tooltip to show emoji
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const moodValue = payload[0].value;
    return (
      <div className="bg-gray-900/90 text-white p-2 rounded-lg shadow-lg">
        <p className="font-bold">{label}</p>
        <p className="text-xl">
          {moodMap[moodValue].emoji} Mood: {moodValue}
        </p>
      </div>
    );
  }
  return null;
};

const MoodChart = ({ data = sampleData }) => {
  // Function to style each segment
  const getSegmentColor = (entry, index, points) => {
    if (!points[index]) return "#FFD700";
    const moodValue = data[index].mood;
    return moodMap[moodValue]?.color || "#FFD700";
  };

  return (
    <div className="w-full h-64 bg-white/10 p-4 rounded-2xl backdrop-blur-md shadow-lg">
      <h2 className="text-white font-semibold mb-2">Mood Trend</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#fff"
            tick={{ fill: "#fff", fontSize: 12 }}
          />
          <YAxis
            domain={[1, 5]}
            stroke="#fff"
            tick={{ fill: "#fff", fontSize: 12 }}
            allowDecimals={false}
          />
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="mood"
            dot={{ r: 6 }}
            activeDot={{ r: 8, strokeWidth: 2, stroke: "#fff" }}
            stroke="#FFD700" // fallback stroke
            strokeWidth={3}
            segment={(props) => {
              const { x1, y1, x2, y2, index } = props;
              const moodValue = data[index].mood;
              return (
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={moodMap[moodValue].color}
                  strokeWidth={3}
                />
              );
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Emoji legend */}
      <div className="flex justify-between mt-2 text-white text-sm">
        {Object.entries(moodMap).map(([key, { emoji, color }]) => (
          <div key={key} className="flex items-center gap-1">
            <span style={{ color }}>{emoji}</span>
            <span>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodChart;
