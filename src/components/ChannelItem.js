import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import channelClickSound from "../media/channleClick.mp3";

const ChannelItem = ({ text, setChannelItem }) => {
    const audio = new Audio(channelClickSound);
    const navigate = useNavigate();
    const [active, setActive] = useState(true);

    const handleChannelClick = () => {
        setChannelItem(text);
        audio.play();
        const url = text.split(' ')[0].toLowerCase();
        setActive(false);
        navigate(url)
    }
  return (
    <div className={`flex w-full font-bold float-left text-green-400 hover:text-gray-200 text-lg hover:bg-green-600 transition-colors duration-300`} onClick={handleChannelClick}>
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
