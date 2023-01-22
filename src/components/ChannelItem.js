import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import channelClickSound from "../media/channleClick.mp3";

const ChannelItem = ({
  text,
  setChannelItem,
  index,
  setActiveIdx,
  isActive,
}) => {
  const audio = new Audio(channelClickSound);
  const navigate = useNavigate();

  const handleChannelClick = (index) => {
    setChannelItem(text);
    audio.play();
    setActiveIdx(index);
    const url = text.split(" ")[0].toLowerCase();
    navigate(url);
  };
  return (
    <div
      className={`flex w-full font-bold float-left text-green-400 hover:text-gray-200 text-xs md:text-lg hover:bg-green-600 transition-colors duration-300`}
      onClick={() => handleChannelClick(index)}
    >
      <button
        type="button"
        className={`border-solid border-2 border-green-600 w-full p-2 flex items-center ${
          isActive && "bg-green-600"
        }`}
      >
        <AiOutlineRight size="18" />
        <span>{text}</span>
      </button>
    </div>
  );
};

export default ChannelItem;
