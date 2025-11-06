import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">🏡 ListingApp</div>

      {/* Search bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Nav + Auth buttons */}
      <nav className="flex items-center gap-6">
        <ul className="hidden md:flex gap-4 text-gray-700 font-medium">
          <li>Rooms</li>
          <li>Mansion</li>
          <li>Countryside</li>
          <li>Beach</li>
        </ul>
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg">Sign In</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;