import React from "react";
const TopNav = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-800">Krysalis</div>
        <ul className="flex flex-wrap gap-4 text-sm font-medium text-gray-700">
          <li><a href="#about-krysalis" className="hover:text-blue-600">About Krysalis</a></li>
          <li><a href="#chairman" className="hover:text-blue-600">Chairman</a></li>
          <li><a href="#managing-director" className="hover:text-blue-600">Managing Director</a></li>
          <li><a href="#principal" className="hover:text-blue-600">Principal</a></li>
          <li><a href="#mission" className="hover:text-blue-600">Our Mission</a></li>
          <li><a href="#vision" className="hover:text-blue-600">Our Vision</a></li>
        </ul>
      </div>
    </nav>
  );
};
export default TopNav;
