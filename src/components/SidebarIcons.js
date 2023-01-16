import React from "react";

const SidebarIcons = ({ icon, text = "tooltips", setChannel }) => {
  return (
    <div className="sidebar-icon group" onClick={() => setChannel(text)}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text.toUpperCase()}</span>
    </div>
  );
};

export default SidebarIcons;
