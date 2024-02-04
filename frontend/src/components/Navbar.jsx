import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.png";
import notif from "../data/notif.svg";
import { Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import "../index.css";
import { Avatar, Badge } from "antd";
import search from "../data/search.svg"
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    setScreenSize,
    screenSize,
  } = useStateContext();

  return (
    <div className="flex bg-white justify-between mt-2 p-2 md:mr-10 relative">
      <h1 className="md:ml-4 mt-1.5 font-semibold hidden sm:flex sm:text-2xl">
        Dashboard
      </h1>
      <div className="flex gap-x-6">
        <div className="flex border rounded-lg pr-4 w-[20rem] -mr-4 lg:mr-[6.25rem]">
          <input
            type="text"
            className="w-full placeholder-gray-400 text-sm mr-8 border-none px-4 text-gray-700 rounded-lg"
            placeholder="Search from courses..."
          />
          <div className="mt-2 -ml-6">
           <img src={search} alt="" className="hover:cursor-pointer"/>
          </div>
        </div>
        <div
          onClick={() => handleClick("notification")}
          className="flex items-center cursor-pointer px-2 bg-gray-100 hover:cursor-pointer rounded-full"
        >
          <Badge dot={true}>
            <Avatar
              className="w-auto h-[1.75rem]"
              src={<img src={notif} alt="notification" />}
            />
          </Badge>
        </div>
        <div
          onClick={() => handleClick("userProfile")}
          className="flex items-center gap-3 cursor-pointer py-1.5 px-2 bg-gray-100 hover:cursor-pointer rounded-full"
        >
          <Avatar icon={<img src={avatar} alt="" />} />
          <p>
            <span className="font-semibold mr-3 text-14">Alesia K.</span>
          </p>
          <MdKeyboardArrowDown className="text-14" />
        </div>
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
