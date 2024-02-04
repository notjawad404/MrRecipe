import React, { useEffect, useState } from "react";
import discussion from "../data/Discussion.png";
import icon from "../data/icon.svg";
import star from "../data/star.svg";
import line from "../data/line.png";
import temp from "../data/temp.png";
import content from "../data/content.svg";
import assignment from "../data/assignment.svg";
import quiz from "../data/quiz.svg";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import course1 from "../data/course1.png";
import course2 from "../data/course2.png";
import course3 from "../data/course3.png";
import Calendar from "react-calendar";
import Heart from "../data/Heart.svg"
import "./Dashboard.css";

import Isotope from "isotope-layout";
const Dashboard = () => {
  const [selected, setselected] = useState("enrolled");

  const [date, setDate] = useState(new Date());
  // state for storing the isotope object, with an initial value of null
  const [isotope, setIsotope] = useState(null);
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        // filter-container: className of the parent of the isotope elements
        itemSelector: ".filter-item", // filter-item: className of the isotope elements
        layoutMode: "fitRows", // for horizontal isotope
      })
    );
  }, []); // [] makes this useEffect work like a componentDidMount in a class component
  useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div className="flex-col md:flex overflow-y-auto bg-white h-full w-full">
      <main className="lg:pl-[29rem] bg-white">
        <div className="absolute leftside md:top-16 bg-white xl:pl-[28rem]">
          <div className="px-4 mt-4 sm:px-6 lg:px-8 ">
            <div className="app">
              <div className="calendar-container">
                {/*integrate with calendar page*/}
                <Calendar onChange={setDate} value={date} />
              </div>
            </div>
            <div className="bg-gray-100 todo h-[16rem] overflow-y-scroll mt-6 p-4 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-semibold">To Do</h3>
                <p className="text-gray-500 text-xs mt-1 hover:cursor-pointer"><a href="/calendar">View All</a></p>
              </div>
              <div className="flex-col mt-2 overflow-y-scroll">
                <div className="bg-white border rounded-lg mb-3 p-2">
                  <div className="flex">
                    <img src={quiz} alt="" className="w-4 h-4 mt-1 mx-2" />
                    <h3 className=" font-medium text-sm">Quiz 2</h3>
                  </div>
                  <div className="flex text-xs text-gray-400">
                    <p className="mx-8">Course Name</p>
                  </div>
                </div>
                <div className="bg-white border rounded-lg mb-3 p-2">
                  <div className="flex">
                    <img src={assignment} className="w-5 h-5 mt-1 mx-1" />
                    <h3 className="text-sm font-medium">Assignment 2</h3>
                  </div>
                  <div className="flex text-xs text-gray-400">
                    <p className="mx-8">Course Name</p>
                  </div>
                </div>
                <div className="bg-white border rounded-lg mb-3 p-2 overflow-y-scroll">
                  <div className="flex">
                    <img src={quiz} alt="" className="w-4 h-4 mt-1 mx-2" />
                    <h3 className="text-sm font-medium">Quiz 2</h3>
                  </div>
                  <div className="flex text-xs text-gray-400">
                    <p className=" mx-8">Course Name</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 classes h-[14rem] overflow-y-scroll mt-6 p-4 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-semibold">Upcoming Lessons</h3>
                <p className="text-gray-500 text-xs mt-1 hover:cursor-pointer"><a href="/mycourses">View All</a></p>
              </div>
              <div className="flex-col mt-2 ">
                <div className="bg-white rounded-lg border mb-3 p-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm  font-medium">Class Topic</h3>
                    <h3 className="text-xs mt-1">Lesson 3</h3>
                  </div>
                  <hr />
                  <div className="flex items-center gap-x-2 text-xs text-gray-500 mt-2">
                    <img src={icon} alt="" />
                    <p>Course Name</p>
                    <img src={clock} alt="" className="ml-2 h-4" />
                    <p>Timing</p>
                  </div>
                 
                </div>
                <div className="bg-white rounded-lg border mb-3 p-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">Class Topic</h3>
                    <h3 className="text-xs mt-1">Lesson 4</h3>
                  </div>
                  <hr />
                  <div className="flex items-center gap-x-2 text-xs text-gray-500 mt-2">
                    <img src={icon} alt="" />
                    <p>Course Name</p>
                    <img src={clock} alt="" className="ml-2 h-4" />
                    <p>Timing</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className="absolute bg-white top-20 left-[15rem] w-[100vw] md:w-[58rem] py-2 px-2 md:px-8 ">
        {/* Hero card */}
        <div className="h-[18rem] -mt-2 bg-gray-100 mx-2 rounded-xl">
          <h1 className="font-semibold absolute mt-4 ml-[1.25rem]">
            Hello Alesia K! 👋
          </h1>
          <div className="absolute banner medologybg mx-2 md:mx-4 mt-14 h-[13rem] rounded-xl w-[40rem] md:w-[51rem]">
            <div className="flex jusitfy-between">
              <div className="flex flex-col justify-center ml-6">
                <h1 className="text-white font-semibold text-2xl">
                  Welcome back
                </h1>
                <p className="text-gray-200 text-sm tracking-wide leading-5 mt-3">
                  You’re on the main dashboard page on our portal now where
                  you’ll be able to do... whatever you need to do!
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <img
                  className="h-[12rem] w-[32rem] image"
                  src={discussion}
                  alt="People discussing"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Hero card */}
        <div className="bg-white mx-2">
          <div className="flex justify-between mt-10">
            <h1 className="font-semibold text-2xl">Learning Progress</h1>
            <a className="hover:cursor-pointer" href="">
              <h2 className="text-gray-400">View All</h2>
            </a>
          </div>
          <div className="flex progress gap-x-2">
            <div className="mt-6 px-2 py-4 rounded-lg border border-gray-300 course w-[18rem]">
              <div className="flex justify-between items-center mx-4">
               <div className="p-2 rounded-full bg-gray-100"><img src={icon} alt="" className="w-5 h-5" /></div>
                <div className="flex-col">
                  <h1 className="font-semibold text-md">Course Name</h1>
                  <h2 className="text-sm text-gray-500">Medical</h2>
                </div>
                <h1 className="font-semibold mt-6">48%</h1>
              </div>
              {/*add line graph*/}
              <img src={line} alt="" className="mt-2 w-[90%] ml-2" />
            </div>
            <div className="mt-6 px-2 py-4 rounded-lg border border-gray-300 course w-[18rem]">
              <div className="flex justify-between items-center mx-4">
               <div className="p-2 rounded-full bg-gray-100"><img src={icon} alt="" className="w-5 h-5" /></div>
                <div className="flex-col">
                  <h1 className="font-semibold text-md">Course Name</h1>
                  <h2 className="text-sm text-gray-500">Medical</h2>
                </div>
                <h1 className="font-semibold mt-6">48%</h1>
              </div>
              {/*add line graph*/}
              <img src={line} alt="" className="mt-2 w-[90%] ml-2" />
            </div>
            <div className="mt-6 px-2 py-4 rounded-lg border border-gray-300 course w-[18rem]">
              <div className="flex justify-between items-center mx-4">
               <div className="p-2 rounded-full bg-gray-100"><img src={icon} alt="" className="w-5 h-5" /></div>
                <div className="flex-col">
                  <h1 className="font-semibold text-md">Course Name</h1>
                  <h2 className="text-sm text-gray-500">Medical</h2>
                </div>
                <h1 className="font-semibold mt-6">48%</h1>
              </div>
              {/*add line graph*/}
              <img src={line} alt="" className="mt-2 w-[90%] ml-2" />
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <h1 className="font-semibold text-2xl mx-2">Courses</h1>
          <div className="flex justify-between mt-6">
            <div className="flex gap-x-20 ml-6">
              <div onClick={() => setFilterKey("enrolled")}>
                <h1
                  onClick={() => setselected("enrolled")}
                  className={
                    selected === "enrolled"
                      ? "font-semibold hover:cursor-pointer text-lg "
                      : "font-semibold hover:cursor-pointer text-lg "
                  }
                >
                  Enrolled
                </h1>
              </div>
              <div onClick={() => setFilterKey("new")}>
                <h1
                  onClick={() => setselected("new")}
                  className={
                    selected === "new"
                      ? "font-semibold hover:cursor-pointer text-lg "
                      : "font-semibold hover:cursor-pointer text-lg "
                  }
                >
                  New
                </h1>
              </div>
              <div onClick={() => setFilterKey("popular")}>
                <h1
                  onClick={() => setselected("popular")}
                  className={
                    selected === "popular"
                      ? "font-semibold hover:cursor-pointer text-lg "
                      : "font-semibold hover:cursor-pointer text-lg "
                  }
                >
                  Popular
                </h1>
              </div>
            </div>
            <a className="hover:cursor-pointer" href="">
              <h2 className="text-gray-400">View All</h2>
            </a>
          </div>
          <div className="flex mt-2 w-full">
                <hr
                  className={
                    selected === "enrolled"
                      ? "bg-teal-700 h-[0.2rem] w-32"
                      : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
                <hr
                  className={
                    selected === "new"
                    ? "bg-teal-700 h-[0.2rem] w-32"
                    : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
                 <hr
                  className={
                    selected === "popular"
                    ? "bg-teal-700 h-[0.2rem] w-32"
                    : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
              </div>
          <div className="mt-6  w-full">
            <div className="filter-container">
              <div className="flex gap-y-3 flex-wrap">
                <div className="filter-item filters enrolled mr-4 mb-4 w-[15rem] p-2 shadow-md shadow-gray-300 rounded-lg">
                  <img src={course1} alt="" />
                  <div className="flex justify-between mx-1 mt-2">
                    <div>
                      {/*integrate mapping here */}
                      <h1 className="font-semibold">Course Name</h1>
                      <p className="flex text-xs text-gray-500">
                        5.0
                        <span>
                          <img src={star} alt="" className="ml-2" />
                        </span>
                      </p>
                    </div>
                    {/*needs to be changed with piechart*/}
                    <img src={temp} alt="" className="w-10 h-10 ml-6" />
                  </div>
                  <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
                </div>

                <div className="filter-item filters new p-2 mr-4 mb-4 w-[15rem] shadow-md shadow-gray-300 rounded-lg">
                  <img src={course2} alt="" />
                  <div className="flex justify-between mx-1 mt-2">
                    <div>
                      <h1 className="font-semibold">Course Name</h1>
                      <p className="flex text-xs text-gray-500">
                        5.0
                        <span>
                          <img src={star} alt="" className="ml-2" />
                        </span>
                      </p>
                    </div>
                    {/*needs to be changed with piechart*/}
                    <img src={temp} alt="" className="w-10 h-10 ml-6" />
                  </div>
                  <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
                </div>

                <div className="filter-item filters enrolled popular mb-4 mr-4 w-[15rem] p-2 shadow-md shadow-gray-300 rounded-lg">
                  <img src={course3} alt="" />
                  <div className="flex justify-between mx-1 mt-2">
                    <div>
                      <h1 className="font-semibold">Course Name</h1>
                      <p className="flex text-xs text-gray-500">
                        5.0
                        <span>
                          <img src={star} alt="" className="ml-2" />
                        </span>
                      </p>
                    </div>
                    {/*needs to be changed with piechart*/}
                    <img src={temp} alt="" className="w-10 h-10 ml-6" />
                  </div>
                  <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
                </div>
                <div className="filter-item filters enrolled new mr-4 mb-4 w-[15rem] p-2 shadow-md shadow-gray-300 rounded-lg">
                  <img src={course1} alt="" />
                  <div className="flex justify-between mx-1 mt-2">
                    <div>
                      <h1 className="font-semibold">Course Name</h1>
                      <p className="flex text-xs text-gray-500">
                        5.0
                        <span>
                          <img src={star} alt="" className="ml-2" />
                        </span>
                      </p>
                    </div>
                    {/*needs to be changed with piechart*/}
                    <img src={temp} alt="" className="w-10 h-10 ml-6" />
                  </div>
                  <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
