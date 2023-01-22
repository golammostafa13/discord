import React from "react";
import { useNavigate } from "react-router-dom";
import clickableSound from "../media/client_public_sound_click.mp3";

const SidebarIcons = ({ icon, text="tooltips", setChannel }) => {
    const audio = new Audio(clickableSound);
    const navigate = useNavigate();

    const handleIconClick = () => {
        setChannel(text);
        navigate(`/${text}`);
        audio.play();
    }
  return (
    <div className="sidebar-icon group" onClick={handleIconClick}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text.toUpperCase()}</span>
    </div>
  );
};

export default SidebarIcons;
