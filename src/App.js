import { useState } from "react";
import Board from "./components/Board";
import Channel from "./components/Channel";
import Sidebar from "./components/Sidebar";
import { motherData } from "./data";

function App() {
  const [channels, setChannels] = useState([]);
  const [title, setTitle] = useState('Enjoy the Game');

  const setChannel = (text) => {
    setChannels(motherData[text]);
    setTitle(text);
  };
  return (
    <div className="flex">
      <Sidebar setChannel={setChannel}/>
      <Channel channels={channels} />
      <Board title={title} />
    </div>
  );
}

export default App;
