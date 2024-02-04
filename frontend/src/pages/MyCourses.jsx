import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import course1 from "../data/course1.png";
import course2 from "../data/course2.png";
import course3 from "../data/course3.png";
import content from "../data/content.svg";
import star from "../data/star.svg";
import temp from "../data/temp.png";

const MyCourses = () => {
  const [isotope, setIsotope] = useState(null);
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = useState(".inprogress");
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
      filterKey === ".inprogress"
        ? isotope.arrange({ filter: `.inprogress` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  const [selected, setselected] = useState("progress");

  return (
    <div className="mt-10 mx-12 bg-white">
      <h1 className="font-semibold text-2xl">My Courses</h1>
      <div className="flex justify-between mt-6">
        <div className="flex gap-x-8 ml-4">
          <div onClick={() => setFilterKey("inprogress")}>
            <h1
              onClick={() => setselected("progress")}
              className={
                selected === "progress"
                  ? "font-semibold hover:cursor-pointer text-lg "
                  : "font-semibold hover:cursor-pointer text-lg"
              }
            >
              In Progress
            </h1>
          </div>
          <div onClick={() => setFilterKey("completed")}>
            <h1
              onClick={() => setselected("completed")}
              className={
                selected === "completed"
                  ? "font-semibold hover:cursor-pointer text-lg "
                  : "font-semibold hover:cursor-pointer text-lg"
              }
            >
              Completed
            </h1>
          </div>
        </div>
      </div>
      <div className="flex mt-2 w-full">
                <hr
                  className={
                    selected === "progress"
                      ? "bg-teal-700 h-[0.2rem] w-32"
                      : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
                <hr
                  className={
                    selected === "completed"
                    ? "bg-teal-700 h-[0.2rem] w-36"
                    : "bg-gray-300 h-[0.2rem] w-36"
                  }
                />
                             </div>
      <div className="mt-6 w-full">
        <div className="filter-container">
          <div className="flex gap-y-3  flex-wrap">
            <div className="filter-item filters inprogress mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
            <div className="flex mt-2 justify-between">
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                  <a href="/course"> <h1 className="font-semibold">Course Name</h1></a>
                  <p className="flex text-xs text-gray-500">
                    5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                </div>
                {/*needs to be changed with piechart*/}
                <img src={temp} alt="" className="w-10 h-12 ml-6" />
              </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
              <div className="flex gap-x-1 mt-4">
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">20 /</span> 50
                    </h1>
                    <p className="text-xs">Lessons</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">04 /</span> 10
                    </h1>
                    <p className="text-xs">Quizzes</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-2 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs text-center">
                      <span className="font-semibold text-sm">07 /</span> 15
                    </h1>
                    <p className="text-xs text-center">Assignments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-item filters inprogress p-3 mr-4 mb-4 shadow-md shadow-gray-300 rounded-xl">
              <img src={course2} alt="" className="w-[20rem] h-[10rem] mb-4" />
              <div className="flex mt-2 justify-between">
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold">Course Name</h1>
                  <p className="flex text-xs text-gray-500">
                    5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                </div>
                {/*needs to be changed with piechart*/}
                <img src={temp} alt="" className="w-10 h-12 ml-6" />
              </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
              <div className="flex gap-x-1 mt-4">
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">20 /</span> 50
                    </h1>
                    <p className="text-xs">Lessons</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">04 /</span> 10
                    </h1>
                    <p className="text-xs">Quizzes</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-2 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs text-center">
                      <span className="font-semibold text-sm">07 /</span> 15
                    </h1>
                    <p className="text-xs text-center">Assignments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-item filters inprogress mb-4 mr-4 p-3 shadow-md shadow-gray-300 rounded-xl">
              <img src={course3} alt="" className="w-[20rem] h-[10rem] mb-4" />
              <div className="flex mt-2 justify-between">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Course Name</h1>
                  <p className="flex text-xs text-gray-500">
                    5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                </div>
                {/*needs to be changed with piechart*/}
                <img src={temp} alt="" className="w-10 h-12 ml-6" />
              </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
              <div className="flex gap-x-1 mt-4">
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">20 /</span> 50
                    </h1>
                    <p className="text-xs">Lessons</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">04 /</span> 10
                    </h1>
                    <p className="text-xs">Quizzes</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-2 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs text-center">
                      <span className="font-semibold text-sm">07 /</span> 15
                    </h1>
                    <p className="text-xs text-center">Assignments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-item filters inprogress mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
              <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" />
              <div className="flex mt-2 justify-between">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Course Name</h1>
                  <p className="flex text-xs text-gray-500">
                    5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                </div>
                {/*needs to be changed with piechart*/}
                <img src={temp} alt="" className="w-10 h-12 ml-6" />
              </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
              <div className="flex gap-x-1 mt-4">
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">20 /</span> 50
                    </h1>
                    <p className="text-xs">Lessons</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-6 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs">
                      <span className="font-semibold text-sm">04 /</span> 10
                    </h1>
                    <p className="text-xs">Quizzes</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg px-2 py-2">
                  <div className="flex-col justify-center">
                    <h1 className="text-xs text-center">
                      <span className="font-semibold text-sm">07 /</span> 15
                    </h1>
                    <p className="text-xs text-center">Assignments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-item filters completed mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
              <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" />
              <div className="flex mt-2 justify-between">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Course Name</h1>
                  <p className="flex text-xs text-gray-500">
                    5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg h-6">
                  <p className="text-sm py-1 px-2 font-medium">
                    Score : 90 / 100
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                 <div className="flex mt-1 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
                <a className="text-teal-400 text-xs mt-1">View Certificate</a>
              </div>
            </div>

            <div className="filter-item filters completed mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
              <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" />
              <div className="flex mt-2 justify-between">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Course Name</h1>
                  <p className="flex text-xs text-gray-500">
                    5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg h-6">
                  <p className="text-sm py-1 px-2 font-medium">
                    Score : 90 / 100
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                 <div className="flex mt-1 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
                <a className="text-teal-400 text-xs mt-1">View Certificate</a>
              </div>
            </div>

            <div className="filter-item filters completed mr-4 mb-4 p-2 shadow-md shadow-gray-300 rounded-xl">
              <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" />
              <div className="flex mt-2 justify-between">
                <div className="flex flex-col">
                  <h1 className="font-semibold">Course Name</h1>
                  <p className="flex text-xs text-gray-500">
                    5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg h-6">
                  <p className="text-sm py-1 px-2 font-medium">
                    Score : 90 / 100
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                 <div className="flex mt-1 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
                <a className="text-teal-400 text-xs mt-1">View Certificate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
