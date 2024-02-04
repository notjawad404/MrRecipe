import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.png";

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white p-4 rounded-lg w-64">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-md">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-2 pb-2">
        <img
          className="rounded-full h-14 w-14"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-lg">Alesia K.</p>
          <p className="text-gray-500 text-xs ">Medical/Dental</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 mb-2 p-2 hover:bg-light-gray cursor-pointer"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="rounded-full px-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
            <div>
              <a href={item.href}>
                <p className=" text-sm">{item.title}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <p className="text-gray-500 p-4 text-xs text-center">
        Joined December 2023
      </p>
    </div>
  );
};

export default UserProfile;
