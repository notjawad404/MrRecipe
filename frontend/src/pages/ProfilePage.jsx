import React, { useState } from "react";
import cover from "../data/cover.png";
import edit from "../data/Edit.svg";
import line from "../data/line.png";
import icon from "../data/icon.svg";
import facebook from "../data/facebook.svg";
import tempchart from "../data/tempchart.png";
import instagram from "../data/instagram.svg";
import down from "../data/down.png";
import linkedin from "../data/linkedin.svg";
import statistics from "../data/Statics.png";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.png";
import LineChart from "../components/Charts/LineChart";
function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultChoice, setdefaultChoice] = useState("Weekly");
  const [chosen, setChosen] = useState("");

  return (
    <div className="overflow-y-auto bg-white h-full w-full pb-6">
      <img src={cover} alt="" className="px-10 w-full z-1" />
      <div className="flex gap-x-12 ml-10">
        <div className="flex-col -mt-[6rem] z-[999] shadow-lg bg-white shadow-slate-400 rounded-lg h-[29rem] w-[14rem] ml-20">
          <img src={edit} alt="" className="ml-[12rem] mt-2" />
          <img
            src={avatar}
            alt=""
            className="rounded-full w-24 h-24 ml-[4rem] mt-2 bg-yellow-200"
          />
          <h1 className="font-semibold text-lg text-center mt-4">Harry K.</h1>
          
          <p className="text-xs text-center">(12345)</p>
          <p className="text-xs text-center text-gray-400">
            harryk1234@gmail.com
          </p>
          <div className="flex justify-between mx-6 mt-6">
            <div className="flex-col">
              <h1 className="font-semibold text-sm text-center">05</h1>
              <p className="text-xs text-gray-500">Courses</p>
            </div>
            <div className="flex-col">
              <h1 className="font-semibold text-sm text-center">03</h1>
              <p className="text-xs text-gray-500">Certificates</p>
            </div>
          </div>
          <h1 className="font-semibold text-sm ml-4 mt-4">Bio:</h1>
          <p className="text-xs text-center mx-3 mt-1 text-gray-400">
            The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
          </p>
          <div className="flex mx-20 mt-4 gap-x-3">
            <a>
              <img src={linkedin} alt="" className="w-6 h-4 hover:cursor-pointer" />
            </a>
            <a>
              <img src={instagram} alt="" className="w-6 h-4 hover:cursor-pointer" />
            </a>
            <a>
              <img src={facebook} alt="" className="w-6 h-4 hover:cursor-pointer" />
            </a>
          </div>
          <hr className="mt-2" />
          <p className="text-gray-400 p-4 text-xs text-center">
            Joined December 2023
          </p>
        </div>
        <div className="bg-white w-[25rem]">
          <div className="flex justify-between mt-10">
            <h1 className="font-semibold text-2xl">My Progress</h1>
          </div>
          <div className="mt-4 rounded-lg border border-gray-300 w-[18rem]">
            <img src={tempchart} alt="" />
          </div>
        </div>
        <div className="bg-white">
          <div className="flex justify-between mt-10">
            <h1 className="font-semibold text-2xl">Current Courses</h1>
            <a className="hover:cursor-pointer" href="">
              <h2 className="text-gray-500 mt-1 ml-6">View All</h2>
            </a>
          </div>
          <div className="flex-col gap-x-4">
            <div className="mt-4 px-2 py-4 rounded-lg border border-gray-300 w-[22rem]">
            <div className="flex justify-between items-center mx-4">
               <div className="p-2 rounded-full bg-gray-100"><img src={icon} alt="" className="w-5 h-5" /></div>
                <div className="flex-col">
                  <h1 className="font-semibold text-md">Course Name</h1>
                  <h2 className="text-sm text-gray-500">Medical</h2>
                </div>
                <h1 className="font-semibold mt-6">48%</h1>
              </div>
              {/*add line graph*/}
              <img src={line} alt="" className="mt-2 w-[90%] ml-4" />
            </div>
            <div className="mt-4 px-2 py-4 rounded-lg border border-gray-300 w-[22rem]">
            <div className="flex justify-between items-center mx-4">
               <div className="p-2 rounded-full bg-gray-100"><img src={icon} alt="" className="w-5 h-5" /></div>
                <div className="flex-col">
                  <h1 className="font-semibold text-md">Course Name</h1>
                  <h2 className="text-sm text-gray-500">Medical</h2>
                </div>
                <h1 className="font-semibold mt-6">48%</h1>
              </div>
              {/*add line graph*/}
              <img src={line} alt="" className="mt-2 w-[90%] ml-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ml-[25rem] w-[51.5rem]">
        <div className="flex justify-between -mt-8">
          <h1 className="font-semibold text-2xl">My Score</h1>
          <div className="w-fit z-[999] border-gray-500 border py-1 px-4 mr-8 rounded-lg">
            <div className="flex justify-between">
              <button className="text-sm z-[999] " onClick={() => setIsOpen(!isOpen)}>
                {chosen ? chosen : defaultChoice}
              </button>
              <img
                src={down}
                alt=""
                className="w-3 h-2 mt-2 ml-2"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            {isOpen && (
              <div className="z-[999] w-28 mt-3 bg-white rounded-lg -ml-4 -mb-[14rem] border border-gray-500">
                <p
                  className="text-sm hover:cursor-pointer my-1.5 text-center text-gray-500 hover:bg-gray-100"
                  onClick={() => {
                    setChosen("Today");
                  }}
                >
                  Today
                </p>
                <p className="text-sm hover:cursor-pointer my-1.5 text-center text-gray-500 hover:bg-gray-100" onClick={() => {
                    setChosen("Yesterday");
                  }}>
                  Yesterday
                </p>
                <p className="text-sm hover:cursor-pointer my-1.5 text-center text-gray-500 hover:bg-gray-100" onClick={() => {
                    setChosen("This Week");
                  }}>
                  This Week
                </p>
                <p className="text-sm hover:cursor-pointer my-1.5 text-center text-gray-500 hover:bg-gray-100"
                onClick={() => {
                  setChosen("Last Week");
                }}>
                  Last Week
                </p>
                <p className="text-sm hover:cursor-pointer my-1.5 text-center text-gray-500 hover:bg-gray-100" onClick={() => {
                    setChosen("Last Month");
                  }}>
                  Last Month
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 z-[1] rounded-lg border border-gray-300 w-[49rem]">
          <img src={statistics} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
