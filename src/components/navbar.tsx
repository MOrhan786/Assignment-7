import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="w-full  flex flex-wrap items-center justify-between text-white bg-gray-950 px-5 sm:px-10 lg:px-20 h-[80px] sticky top-0 z-50">
      {/* Brand Name */}
      <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
        Web App
      </h1>

      {/* Navigation */}
      <nav className=" lg:w-auto w-[50%]">
        <ul className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 text-sm sm:text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          <Link href="/">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            </Link>
         
            <li className="hover:text-gray-400 cursor-pointer">Data Fetching</li>
         
         
            <li className="hover:text-gray-400 cursor-pointer">Technique</li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
