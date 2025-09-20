import React from "react";

const BranchMonitoring = () => {
  const stats = [
    { label: "Good", value: 2, status: "Good" },
    { label: "Escalations", value: 0, status: "Escalated" },
    { label: "Suspicious", value: 0, status: "Escalated" },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-lg text-white">
      <h2 className="text-lg font-semibold mb-4">Branch Monitoring</h2>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="p-3 bg-gray-700 rounded-lg text-center">
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-sm text-gray-400">{item.label}</p>
            <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${item.status === "Good" ? "bg-green-500" : "bg-red-500"}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchMonitoring;
