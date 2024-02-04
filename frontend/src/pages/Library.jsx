import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import course1 from "../data/course1.png";
import course2 from "../data/course2.png";
import course3 from "../data/course3.png";
import content from "../data/content.svg";
import star from "../data/star.svg";
import heart from "../data/heart.png"
import filter from "../data/filter.png"
import trash from "../data/trash.png"
import { Dropdown, Space, Divider, Button, theme, Badge } from 'antd';
const { useToken } = theme;

const Library = () => {
  const [dropdown, setdropdown]= useState(false)
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: 'none',
  };

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
  const [selected, setselected] = useState("progress");

  return (
    <div className="mt-10 mx-12 bg-white">
      <h1 className="font-semibold text-2xl">Library</h1>
      <div className="flex justify-between mt-6">
        <div className="flex gap-x-12 ml-4">
        <div onClick={() => setFilterKey("*")}>
            <h1
              onClick={() => setselected("all")}
              className={
                selected === "all"
                  ? "font-semibold hover:cursor-pointer text-lg "
                  : "font-semibold hover:cursor-pointer text-lg"
              }
            >
              All Courses
            </h1>
          </div>
          <div onClick={() => setFilterKey("new")}>
            <h1
              onClick={() => setselected("new")}
              className={
                selected === "new"
                  ? "font-semibold hover:cursor-pointer text-lg "
                  : "font-semibold hover:cursor-pointer text-lg"
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
                  : "font-semibold hover:cursor-pointer text-lg"
              }
            >
              Popular
            </h1>
          </div>
        </div>
        <div className="flex gap-x-4">
        <Badge color="teal" count={3} className="mt-3 hover:cursor-pointer">
        <img src={heart} alt="" className="w-4 h-4"/>
        </Badge>
         <button className="medologybg flex gap-x-2 text-white text-sm py-1.5 px-3 rounded-3xl" onClick={()=>{setdropdown(true)}}>
          <img src={filter} alt=""/>FILTER
        </button>
        {dropdown ? 
        <div className="z-[999] absolute bg-white right-24 p-4 w-[18rem] top-[11rem] rounded-xl shadow-lg  flex-col">
          <div className="flex">
            <p className="text-md font-semibold">Filters</p>
            <button className="flex text-xs mt-1 text-gray-500 ml-32" onClick={() => setFilterKey("*")}>
              Clear All
            <img src={trash} alt="" className="ml-2 w-4 h-4"/>
            </button>
          </div>
          <p className="text-sm font-semibold mt-4">Type</p>
          <div className="text-xs font-medium mt-3">
          <input type="checkbox" id="type" name="type" value="course" className="mr-1 mb-2" />Course <br/>
          <input type="checkbox" id="type" name="type" value="bundle" className="mr-1" />Bundle
          </div>
          <hr className="bg-gray-500 my-3"/>
          <p className="text-sm font-semibold mt-4">Category</p>
          <div className="text-xs font-medium mt-3">
          <input type="checkbox" id="type" name="type" value="course" className="mr-1 mb-2"  />A Level <br/>
          <input type="checkbox" id="type" name="type" value="bundle" className="mr-1 mb-2"  />GCSE <br/>
          <input type="checkbox" id="type" name="type" value="bundle" className="mr-1 mb-2"  />Personal Statement <br/>
          <input type="checkbox" id="type" name="type" value="bundle" className="mr-1 mb-2" />Pre-Application <br/>
          <input type="checkbox" id="type" name="type" value="bundle" className="mr-1"  />UCAT
          </div>
          <hr className="bg-gray-500 my-3"/>
          <p className="text-sm font-semibold mt-4">Level</p>
          <div className="text-xs font-medium mt-3">
          <input type="checkbox" id="type" name="type" value="course" className="mr-1  mb-2"  />All Levels <br/>
          <input type="checkbox" id="type" name="type" value="bundle" className="mr-1 mb-2"  />Beginner <br/>
          <input type="checkbox" id="type" name="type" value="course" className="mr-1 mb-2" />Intermediate <br/>
          <input type="checkbox" id="type" name="type" value="course" className="mr-1" />Expert
          </div>
          <hr className="bg-gray-500 my-3"/>
          <p className="text-sm font-semibold mt-4">Price</p>
          <div className="text-xs mt-3">
         
          </div>
          <button className="mt-4 w-full medologybg rounded-lg py-1 text-white text-sm">APPLY FILTERS</button>
        </div>
        : ""
      }
                </div>
             </div>
             <div className="flex mt-2 w-full">
                <hr
                  className={
                    selected === "all"
                      ? "bg-teal-700 h-[0.2rem] w-32"
                      : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
                <hr
                  className={
                    selected === "new"
                    ? "bg-teal-700 h-[0.2rem] w-28"
                    : "bg-gray-300 h-[0.2rem] w-28"
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
      <div className="mt-6 w-full">
        <div className="filter-container">
          <div className="flex gap-y-3  flex-wrap">
            <div className="filter-item filters new mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course2} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                 <div className="flex justify-between">                
                <a href="/coursedetail"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white px-1.5 rounded-lg text-sm py-1">$80</div>
                </div>
                  <p className="flex text-xs text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="" />
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
            </div>

            <div className="filter-item filters popular p-3 mr-4 mb-4 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                 <div className="flex justify-between">                
                <a href="/course"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white px-1.5 rounded-lg text-sm py-1">$80</div>
                </div>
                  <p className="flex text-xs text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="" />
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
            </div>

            <div className="filter-item filters new mb-4 mr-4 p-3 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course3} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                 <div className="flex justify-between">                
                <a href="/course"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white px-1.5 rounded-lg text-sm py-1">$80</div>
                </div>
                  <p className="flex text-xs text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="" />
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
            </div>

            <div className="filter-item filters popular mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course2} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                 <div className="flex justify-between">                
                <a href="/course"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white px-1.5 rounded-lg text-sm py-1">$80</div>
                </div>
                  <p className="flex text-xs text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="" />
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
            </div>

            <div className="filter-item filters popular mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                 <div className="flex justify-between">                
                <a href="/course"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white px-1.5 rounded-lg text-sm py-1">$80</div>
                </div>
                  <p className="flex text-xs text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="" />
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
            </div>

            <div className="filter-item filters new  mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course2} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                 <div className="flex justify-between">                
                <a href="/course"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white px-1.5 rounded-lg text-sm py-1">$80</div>
                </div>
                  <p className="flex text-xs text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="" />
                    </span>
                  </p>
                </div>
                <div className="flex mt-2 items-center gap-x-1">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-400">110+ Content</p>
                    <img src={divider} alt="" />
                    <img src={clock} alt="" className="w-4 h-4"/>
                    <p className="text-xs text-gray-400">150 Hours</p>
                  </div>
            </div>

            <div className="filter-item filters new mr-4 mb-4 p-2 shadow-md shadow-gray-300 rounded-xl">
            <a href="/course"> <img src={course1} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
                <div className="flex flex-col">
                  {/*integrate mapping here */}
                 <div className="flex justify-between">                
                <a href="/course"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white px-1.5 rounded-lg text-sm py-1">$80</div>
                </div>
                  <p className="flex text-xs text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="" />
                    </span>
                  </p>
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
  );
};

export default Library;
