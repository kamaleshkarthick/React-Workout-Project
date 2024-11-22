import React from 'react';
import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Overview</h1>
      <div className="flex items-center space-x-6">
        <div className="flex space-x-4">
          <FaBell className="text-gray-500" />
          <FaEnvelope className="text-gray-500" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Building Management</span>
          <FaUserCircle className="text-gray-600 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
