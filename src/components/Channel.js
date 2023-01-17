import React from "react";
import ChannelItem from "./ChannelItem";

const Channel = ({ channels, setChannelItem }) => {
  return (
    <div className="h-screen w-64 ml-16 flex flex-col bg-gray-800 float-left p-4 gap-1">
      <h2 className="text-white font-bold text-2xl mb-4">Channels</h2>
      {channels.map((text) => (
        <ChannelItem key={text} text={text} setChannelItem={setChannelItem} />
      ))}
    </div>
  );
};

export default Channel;
