import React from 'react'
import coursesimg from "../data/courses.svg"
import close from "../data/Closemodal.png";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import star from "../data/star.svg";
import openlink from "../data/openlink.svg";

function ModalBundle({ setOpenModal, bundle:{id, name, courseno, hours, courses}}) {
    return (
      <div className="modalBackground w-[100vw] z-[999] h-[100vh] ">
        <div className="modalContainer mr-[16rem]">
          <div className="flex justify-between mt-2 mr-4">
        <h1 className="text-xl font-semibold">{name}</h1>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <img src={close} alt=""/>
            </button>
          </div>
         <div className="flex mt-2 gap-x-1">
        <img src={coursesimg} alt=""className="" />
        <p className="text-xs text-gray-400">{courseno} Courses</p>
        <img src={divider} alt="" />
        <img src={clock} alt="" className="h-4 w-4"/>
        <p className="text-xs text-gray-400">{hours} Hours</p>
      </div>
      <hr className='bg-gray-300 mt-3'/>
      <div className="flex-col mb-6 space-y-4 mt-4 overflow-y-scroll">
{courses.map((course)=>(
                <div className='border p-3 rounded-lg'>
                  <div className="flex justify-between">
                  <h1 className="font-semibold text-md">{course.name}</h1>
                    <a href="/coursedetail"> <img src={openlink}
                               className="hover:cursor-pointer h-[80%] mt-1 w-[80%]"
                               aria-hidden="true"
                                /></a>
                                </div>
                    <p className="flex mt-1 text-xs text-gray-400">
                      Reviews ({course.reviews}) - {course.rating}
                      <span>
                        <img src={star} alt="" className="ml-1" />
                      </span>
                    </p>
                  </div>
            ))}          </div>
        </div>
      </div>
    );
  }
  
  export default ModalBundle;