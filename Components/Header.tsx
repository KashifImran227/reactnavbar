import React from "react";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="nav bg-green-100 h-16">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center">
            <img
              src="fiat-500-4322521_1280.jpg"
              alt="Logo"
              className="h-10 w-10 bg-center object-cover rounded-full"
            />
            <span className="ml-4 text-2xl font-bold text-yellow-600">
              React App
            </span>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex gap-10 text-blue-800">
              <li>
                <a href="/" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contacts" className="hover:text-blue-600 transition">
                  Contacts
                </a>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md ml-5 transition">
              Sign In
            </button>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button className="text-blue-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
