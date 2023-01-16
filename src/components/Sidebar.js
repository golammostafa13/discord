import SidebarIcons from "./SidebarIcons";
import { FaBookOpen, FaCode, FaUserSecret } from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiFillGithub } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

const Sidebar = ({ setChannel }) => {
  return (
    <div
      className="h-screen w-16 mx-auto fixed top-0 left-0 flex flex-col m-0 
                      bg-gray-900 text-white items-center shadow-lg gap-5 justify-between"
    >
      <div>
        <SidebarIcons
          icon={<FaUserSecret size="32" />}
          setChannel={setChannel}
          text="profile"
        />
        <SidebarIcons
          icon={<FaBookOpen size="32" />}
          setChannel={setChannel}
          text="education"
        />
        <SidebarIcons
          icon={<FaCode size="36" />}
          setChannel={setChannel}
          text="experiences"
        />
        <SidebarIcons
          icon={<AiOutlineFundProjectionScreen size="32" />}
          setChannel={setChannel}
          text="projects"
        />
        <SidebarIcons
          icon={<SiMinutemailer size="34" />}
          setChannel={setChannel}
          text="contact"
        />
      </div>
      <div>
        <SidebarIcons icon={<AiFillGithub size="32" />} text="Github" />
        <SidebarIcons icon={<CiLinkedin size="32" />} text="Linkedin" />
      </div>
    </div>
  );
};

export default Sidebar;
