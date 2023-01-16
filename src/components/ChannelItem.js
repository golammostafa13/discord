import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import channelClickSound from "../media/iconSound.wav";

const ChannelItem = ({ text }) => {
    const audio = new Audio(channelClickSound)
    const handleChannelClick = () => {
        audio.play();
    }
  return (
    <div className="flex w-full font-bold float-left text-green-400 hover:text-gray-200 text-lg hover:bg-green-600 transition-colors duration-300" onClick={handleChannelClick}>
      <button
        type="button"
        className="border-solid border-2 border-green-600 w-full p-2 flex items-center focus:bg-green-600 "
      >
        <AiOutlineRight size="18" />
        <span>{text}</span>
      </button>
    </div>
  );
};

export default ChannelItem;
