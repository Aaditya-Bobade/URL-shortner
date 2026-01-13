import React from "react";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const {isAuthenticated} = useSelector((state) => state.auth)
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Website Name */}
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide"
          >
            URL SHORTNER
          </Link>

          {/* Right side - Login Button */}
          {!auth?.isAuthenticated && <Link
            to="/auth"
            className="inline-flex items-center justify-center
              rounded-md bg-blue-600 px-3 py-2
              text-xs sm:text-sm font-semibold text-white
              hover:bg-blue-700 transition-colors
              whitespace-nowrap"
          >
            Login to create custom URL&apos;s
          </Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
