import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import course2 from "../data/course2.png";
import star from "../data/star.svg";
import courses from "../data/courses.svg"
import heart from "../data/heart.png"
import filter from "../data/filter.png"
import trash from "../data/trash.png"
import openlink from "../data/openlink.svg"
import ModalBundle from "../components/ModalBundle";

import { Dropdown, Space, Divider, Button, theme, Badge } from 'antd';
const bundles= [
    {
        id: 0,
        name: "Bundle Name",
        courseno: "2",
        price: 49.89,
        original: 49.89,
        hours: "150",
        courses: [
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "4.0",
                link: "/coursedetail"
            }
        ]
    },
    {
        id: 1,
        name: "Bundle Name",
        courseno: "4",
        price: 49.00,
        original: 55.00,
        hours: "150",
        courses: [
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "4.0",
                link: "/coursedetail"
            }
        ]
    },
    {
        id: 2,
        name: "Bundle Name",
        courseno: "6",
        price: 49.00,
        original: 55.00,
        hours: "150",
        courses: [
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "5.0",
                link: "/coursedetail"
            },
            {
                name: "Course Name",
                reviews: "1K",
                rating: "4.0",
                link: "/coursedetail"
            }
        ]
    },
]

const BundlePackages = () => {
  const [dropdown, setdropdown]= useState(false)
  const [modalOpen, setModalOpen] = useState(false);
 const [bundle, setbundle]= useState(0);
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
  
  const click = ((id) => {
    setModalOpen(true); 
    setbundle(id); 
  });
  
  return (
    <div className='App bg-white w-full overflow-y-auto mb-4'>
    <div className="mt-10 mx-12">
              <div className="flex justify-between mt-6">
      <h1 className="font-semibold text-2xl">Bundle Packages</h1>
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
      <div className="mt-6 w-full">
        <div className="filter-container">
          <div className="flex gap-y-3 flex-wrap">
            {bundles.map((bundle) => (
    <div className="filter-item filters new mr-4 mb-4 p-3 shadow-md shadow-gray-300 rounded-xl">
    <a href="/course"> <img src={course2} alt="" className="w-[20rem] h-[10rem] mb-4" /></a>
        <div className="flex-col">
         <div className="flex justify-between">                
        <a href="/coursedetail"> <h1 className="font-semibold">{bundle.name}</h1></a>
        <div className="flex"><div className="bg-teal-500 text-white text-sm py-0.5 font-medium px-1.5 rounded-lg">$ {(bundle.price.toFixed(2))} 
        </div>
        {bundle.original - bundle.price !== 0 ?         <p className="text-xs line-through text-gray-400 ml-2 mt-1">$ {(bundle.original.toFixed(2))}</p> : <></>
}</div>
        </div>
        <div className="flex mt-2 gap-x-1">
        <img src={courses} alt="w-2 h-2" />
        <p className="text-xs text-gray-400">{bundle.courseno} Courses</p>
        <img src={divider} alt="" />
        <img src={clock} alt="" className="h-4 w-4"/>
        <p className="text-xs text-gray-400">{bundle.hours} Hours</p>
      </div>
      <hr className='bg-gray-300 mt-3'/>
          {bundle.courseno > 2 ? 
      <div className="flex-col mt-4">
      <div className="flex justify-between">
           <h1 className="font-semibold text-sm">{bundle.courses[0].name}</h1>
             <a href="/coursedetail"> <img src={openlink}
                        className="hover:cursor-pointer h-[80%] mt-1 w-[80%]"
                        aria-hidden="true"
                         /></a>
                         </div>
             <p className="flex text-xs text-gray-400">
               Reviews ({bundle.courses[0].reviews}) - {bundle.courses[0].rating}
               <span>
                 <img src={star} alt="" className="ml-1" />
               </span>
             </p>
             <div className="flex mt-4 justify-between">
           <h1 className="font-semibold text-sm">{bundle.courses[1].name}</h1>
             <a href="/coursedetail"> <img src={openlink}
                        className="hover:cursor-pointer h-[80%] mt-1 w-[80%]"
                        aria-hidden="true"
                         /></a>
                         </div>
             <p className="flex text-xs text-gray-400">
               Reviews ({bundle.courses[1].reviews}) - {bundle.courses[1].rating}
               <span>
                 <img src={star} alt="" className="ml-1" />
               </span>
             </p>
         <p className="text-center"> <button
       className="text-gray-400 text-center mt-2 text-xs hover:cursor-pointer"
        onClick={() => 
         click(bundle.id)
        }
      >
        + {(bundle.courseno - 2)} More
      </button>  </p>              
 </div>
:   <div className="flex-col mb-6 space-y-4 mt-4">
{bundle.courses.map((course)=>(
                <div >
                  <div className="flex justify-between">
                  <h1 className="font-semibold text-sm">{course.name}</h1>
                    <a href="/coursedetail"> <img src={openlink}
                               className="hover:cursor-pointer h-[80%] mt-1 w-[80%]"
                               aria-hidden="true"
                                /></a>
                                </div>
                    <p className="flex text-xs text-gray-400">
                      Reviews ({course.reviews}) - {course.rating}
                      <span>
                        <img src={star} alt="" className="ml-1" />
                      </span>
                    </p>
                  </div>
            ))}          </div>
        } 
          
          <button
  type="submit"
  className="rounded-md relative w-full mt-3 medologybg px-16 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-teal-700 hover:border-teal-700 hover:border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
>
          {/*email integration */}
<a href='/paymentconfirmation'>ENROLL</a></button>
        </div> 
    </div>
            ))}
        

          
          </div>
        </div>
      </div>
    </div>
    {modalOpen && <ModalBundle setOpenModal={setModalOpen} bundle={bundles[bundle]}/>}

    </div>
  );
};

export default BundlePackages;
