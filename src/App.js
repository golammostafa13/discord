import { useState } from "react";
import Board from "./components/Board";
import Channel from "./components/Channel";
import Sidebar from "./components/Sidebar";
import { motherData } from "./data";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [channels, setChannels] = useState(motherData['games']);
  const [title, setTitle] = useState("Enjoy the Game-Tic Tac Toe");
  const [subTitle, setSubTitle] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);

  const setChannel = (text) => {
    setActiveIdx(0);
    setChannels(motherData[text]);
    setTitle(text);
    setSubTitle("");
  };
  const setChannelItem = (text) => {
    setSubTitle(text);
  }
  return (
    <div className="flex">
      <Router>
        <Sidebar setChannel={setChannel} />
        <Channel channels={channels} setChannelItem={setChannelItem} activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
        <Board setChannel={setChannel} title={title} subTitle={subTitle} setTitle={setTitle} setSubTitle={setSubTitle} />
      </Router>
    </div>
  );
}

export default App;
