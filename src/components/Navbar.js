import React from "react";
import { BsSun } from "react-icons/bs";
import { GiHummingbird } from "react-icons/gi";

const Navbar = ({ title }) => {
  return (
    <div className="bg-gray-700 shadow-md shadow-gray-800 flex justify-between items-center p-4">
      <div className="flex gap-4 items-center">
        <button className="text-green-400 text-lg font-bold border-2 px-2 py-1 border-solid border-green-600 hover:bg-green-500 hover:text-white flex items-center gap-1">
           <GiHummingbird size="28"/> Home
        </button>
        <h2 className="text-gray-200 text-lg font-bold">
          #{title.toUpperCase()}
        </h2>
      </div>
      <div className="flex items-center">
        <BsSun
          size="24"
          className="text-white cursor-pointer hover:text-orange-500 transition-all duration-300 mr-4"
        />
        <div className="relative flex">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-md text-gray-900 border-2 border-green-600 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
            placeholder="Search..."
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
