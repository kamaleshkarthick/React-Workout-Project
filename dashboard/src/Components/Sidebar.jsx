import React from 'react';
import { FaHome, FaCalendar, FaFileAlt, FaTools, FaBuilding, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-full shadow-md">
      <div className="p-4 border-b">
        <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full w-24 h-24 mx-auto" />
        <h3 className="text-center mt-2">Cebu Towers</h3>
        <p className="text-sm text-gray-500 text-center">200 George Street</p>
      </div>
      <ul className="p-4 space-y-4">
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <FaHome /> <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <FaFileAlt /> <span>Cases</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <FaCalendar /> <span>Calendar</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <FaTools /> <span>Maintenance Schedule</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <FaBuilding /> <span>Building</span>
        </li>
        <li className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded">
          <FaUser /> <span>Residents</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
