import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import React, { useState } from "react";

export default function ResignedDealer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = [
    { name: "Branch Pending", value: 60 },
    { name: "Status Pending", value: 40 },
  ];

  const COLORS = ["#3b82f6", "#22d3ee"]; // blue + cyan

  return (
    <div className="p-4 rounded-xl bg-gray-800 shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-white">Resigned Dealer</h2>

      <div className="h-56 relative">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  className="cursor-pointer transition-all duration-300"
                  // Hover effect: slightly fade slice
                  opacity={hoveredIndex === index ? 0.8 : 1}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{ color: "#aaa", fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center text when hovering */}
        {hoveredIndex !== null && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-sm font-semibold">
              {data[hoveredIndex].name}
            </p>
            <p className="text-cyan-400 text-lg font-bold">
              {data[hoveredIndex].value}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
