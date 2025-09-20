import React from 'react';
import Dragable from 'react-draggable' 
export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Surveillance Dashboard</h1>
      <div className="text-sm text-gray-400">Apr 27, 2924 | 12:45 PM</div>
    </div>
  );
}
