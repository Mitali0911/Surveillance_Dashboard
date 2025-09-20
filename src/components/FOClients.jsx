import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from 'react';
import Dragable from 'react-draggable' 
export default function FOClients() {
  // Dummy chart data
  const data = [
    { name: "Jan", loss: 5000, profit: 8000 },
    { name: "Feb", loss: 7000, profit: 10000 },
    { name: "Mar", loss: 2000, profit: 6000 },
    { name: "Apr", loss: 4000, profit: 9000 },
    { name: "May", loss: 6000, profit: 7000 },
  ];

  return (
    <div className="p-4 rounded-xl bg-gray-800 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">F&O Clients</h2>

      <div className="flex gap-6">
        {/* Loss Section */}
        <div className="w-1/2">
          <p className="text-red-500 font-medium">LOSS</p>
          <p className="text-xl font-bold text-red-400">Rs25,000</p>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="loss" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Profit Section */}
        <div className="w-1/2">
          <p className="text-green-500 font-medium">Profit</p>
          <p className="text-xl font-bold text-green-400">Rs45,000</p>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
