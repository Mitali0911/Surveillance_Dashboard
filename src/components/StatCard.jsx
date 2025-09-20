import React from 'react';
import Dragable from 'react-draggable' 
export default function StatCard({ title, value, color }) {
  return (
    <div className={`p-4 rounded-xl shadow-lg ${color}`}>
      <p className="text-sm font-medium">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}
