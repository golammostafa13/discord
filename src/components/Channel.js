import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChannelItem from "./ChannelItem";

const Channel = ({ channels, setChannelItem , activeIdx, setActiveIdx}) => {

  return (
    <div className="h-screen ml-16 top-0 w-32 md:w-40 lg:w-64 flex flex-col bg-gray-600 float-left p-2 lg:p-4 gap-1">
      <h2 className="text-white font-bold text-md md:text-2xl mb-4">
        Channels
      </h2>
      {channels.map((text, idx) => {
        const isActive = idx === activeIdx;
        return (
          <ChannelItem
            key={text}
            text={text}
            index={idx}
            setChannelItem={setChannelItem}
            isActive={isActive}
            setActiveIdx={setActiveIdx}
          />
        );
      })}
    </div>
  );
};

export default Channel;
