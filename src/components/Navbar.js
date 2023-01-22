import React from "react";
import { BsSun } from "react-icons/bs";
import { GiHummingbird } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import homeClickSound from "../media/homeClick.mp3";

const Navbar = ({setChannel, setTitle, title, subTitle, setSubTitle }) => {
  const audio1 = new Audio(homeClickSound);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    audio1.play();
    setChannel('games');
    setTitle("Enjoy The Game-Tic Tac Toe");
    setSubTitle("");
    navigate("/");
  };

  return (
    <div className="bg-gray-700 shadow-md shadow-gray-800 flex justify-between items-center p-4">
      <div className="flex flex-row gap-2 md:gap-4 items-center">
        <button
          className="text-green-400 md:text-lg font-bold border-2 px-1 md:px-2 py-1 border-solid border-green-600 hover:bg-green-500 hover:text-white flex md:items-center justify-center gap-1 focus:bg-green-500 focus:text-white"
          onClick={handleHomeClick}
        >
          <GiHummingbird size="24" /> Home
        </button>
        <h2 className="text-gray-200 md:text-lg font-bold">
          #{title.toUpperCase()}
        </h2>
        {subTitle && (
          <h2 className="text-green-500 md:text-lg font-bold">
            {` `} #{subTitle.toUpperCase()}
          </h2>
        )}
      </div>
      <div className="flex items-center">
        <BsSun
          size="24"
          className="text-white cursor-pointer hover:text-orange-500 transition-all duration-300  mx-2 md:mx-4"
        />
        <div className="relative md:flex hidden md:visible">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
