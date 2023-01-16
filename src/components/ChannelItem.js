import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const ChannelItem = ({ text }) => {
  return (
    <div className="flex w-full float-left text-gray-200 text-lg hover:bg-green-600 transition-all duration-300">
      <button
        type="button"
        className="border-solid border-2 border-green-600 w-full p-2 flex items-center focus:bg-green-600 transition-all duration-300"
      >
        <AiOutlineRight size="20" />
        <span>{text}</span>
      </button>
    </div>
  );
};

export default ChannelItem;
