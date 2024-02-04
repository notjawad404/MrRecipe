import { useEffect, useState } from "react";
import back from "../data/back.svg";
import thumbnail from "../data/thumbnail.jpeg";
import star from "../data/star.svg";
import content from "../data/content.svg";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import Isotope from "isotope-layout";
import course1 from "../data/course1.png";
import course2 from "../data/course2.png";
import course3 from "../data/course3.png";
import wishlist from "../data/wishlist.png"
import check from "../data/check.svg"
import bullet from "../data/bullet.svg"
import avatar from "../data/avatar.png"

const keytakeaway = [
  {
    name: "Lorem ipsum dolor sit amet"
  },
  {
    name: "Lorem ipsum dolor sit amet"  },
  {
    name: "Lorem ipsum dolor sit amet"  },
  {
    name: "Lorem ipsum dolor sit amet"  },
  {
    name: "Lorem ipsum dolor sit amet"  },
  // More questions...
];

const includes = [
  {
    name: "150 Hours of lessons"
  },
  {
    name: "110+ content"  },
  {
    name: "14 Downloadable resources"  },
  {
    name: "Certificate of completion"  }
];

const tags = [
  {
    name: "Lorem ipsum"
  },
  {
    name: "Lorem ipsum"  },
  {
    name: "Lorem ipsum"  },
  {
    name: "Lorem ipsum"  }
];

const coursecontent = [
 {sno:1,
  name: "content name",
  duration:"1:00"
},
{sno:2,
  name: "content name",
  duration:"1:00"
},
{sno:3,
  name: "content name",
  duration:"1:00"
},
{sno:4,
  name: "content name",
  duration:"1:00"
},
{sno:5,
  name: "content name",
  duration:"1:00"
},
{sno:6,
  name: "content name",
  duration:"1:00"
},
{sno:7,
  name: "content name",
  duration:"1:00"
},
{sno:8,
  name: "content name",
  duration:"1:00"
}
]

const reviews = [
  {
    icon: {content},
    user: "Eman Tharwat",
    time: "1 month ago",
    rating: "4.0",
    stars: 3,
    review:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "  },
  {
    icon: {content},
    user: "Eman Tharwat",
    time: "1 month ago",
    rating: "4.0",
    stars: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const CourseDetail = () => {
  const [selected, setselected] = useState("about");
  // state for storing the isotope object, with an initial value of null
  const [isotope, setIsotope] = useState(null);
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = useState(".about");
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
      filterKey === ".about"
        ? isotope.arrange({ filter: `.about` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div className="flex-col md:flex overflow-y-auto bg-white h-full w-full">
      <main className="lg:pl-[30rem] bg-white">
        <div className="absolute leftside md:top-16 bg-white xl:pl-[26rem]">
          <div className="px-4 mt-4 sm:px-6  ">
          <div className="bg-gray-100 mt-6 p-4 rounded-xl">
            <div className="flex"><h1 className="font-semibold text-xl mb-2">$ 49.00</h1>
            <p className="text-sm line-through text-gray-400 ml-2 mt-1">$ 55.00</p></div>
            <div className="flex"><button><img src={wishlist} alt="" className="h-4 w-4"/></button>
            <p className="text-sm  text-gray-400 ml-2">Add to wishlist</p></div>
            <button
            className='medologybg mt-2 w-full mx-auto text-white font-semibold text-sm rounded-lg h-10'
           >
            <a href="/paymentcourse"
            >
              ENROLL</a>
            </button>
            </div>

            <div className="bg-gray-100 mt-6 py-4 px-2 rounded-xl overflow-y-scroll">
            <div className="px-4 py-2 rounded-xl bg-gray-100 space-y-3">
            <h1 className="font-semibold text-lg mb-2 mr-20">What you'll learn</h1>
            {keytakeaway.map((key) => (

<div className="mt-1 rounded-xl py-0.5 flex">

<span className="ml-2 hover:cursor-pointer flex items-center ">
        <img src={check}
          className="rounded-full mr-3"
          aria-hidden="true"
        />
      </span> 
      <span className="text-sm">
      {key.name}
    </span>
  
</div>              ))}
            </div>
            </div>
         
            <div className="bg-gray-100 mt-6 py-4 px-2 rounded-xl overflow-y-scroll">
            <div className="px-4 py-2 rounded-xl bg-gray-100 space-y-3">
            <h1 className="font-semibold text-lg mb-2 mr-20">Includes</h1>
            {includes.map((include) => (

<div className="mt-1 rounded-xl py-0.5 flex">

<span className="ml-2 hover:cursor-pointer flex items-center ">
        <img src={bullet}
          className="rounded-full mr-3"
          aria-hidden="true"
        />
      </span> 
      <span className="text-sm">
      {include.name}
    </span>
  
</div>              ))}
            </div>
            </div>
           
            <div className="bg-gray-100 mt-6 py-4 px-2 rounded-xl overflow-y-scroll">
            <div className="px-4 py-2 rounded-xl bg-gray-100 space-y-3">
            <h1 className="font-semibold text-lg mb-2 mr-20">Includes</h1>
            {tags.map((tag) => (

<div className="mt-1 rounded-xl py-0.5 flex">

<span className="ml-2 hover:cursor-pointer flex items-center ">
        <img src={bullet}
          className="rounded-full mr-3"
          aria-hidden="true"
        />
      </span> 
      <span className="text-sm">
      {tag.name}
    </span>
  
</div>              ))}
            </div>
            </div>
          </div>
        </div>
      </main>
      <aside className="absolute bg-white top-20 left-[15rem] w-[100vw] md:w-[59%] py-2 px-2 md:px-8 ">
        <a href="./library"><div className="flex">
          <img src={back} alt="" className="w-2 h-3 mr-6 mt-1.5" />
          <h2 className="text-md">Back</h2>
        </div></a>
        <div className="bg-white mt-6">
          <h1 className="font-semibold text-3xl">Course Name</h1>
          <div className="flex mt-2 gap-x-1">
            <p className="flex text-xs text-gray-500">
              5.0
              <span>
                <img src={star} alt="" className="ml-2" />
              </span>
            </p>
            <img src={divider} alt="" />
            <p className="text-xs text-gray-500">Review (1K)</p>
            <img src={divider} alt="" />
            <p className="text-xs text-gray-500">10K students</p>
          </div>
        </div>
       
          <div className="relative">
            <div className="mt-6 h-[32rem] rounded-2xl bg-white transition-all duration-300 sm:mt-4 flex justify-center border-black">
              <img
                src={thumbnail}
                alt="img/clips"
                className="relative inset-0 flex object-cover w-full h-full top-0 left-0 right-0 rounded-2xl opacity-100 z-10 transition-opacity duration-500"
              />
            </div>
        </div>
           <div className="flex-col"> 
           <div className="mt-8 flex gap-x-24 ml-16">
              <div onClick={() => setFilterKey("about")}>
                <h1
                  onClick={() => setselected("about")}
                  className={
                    selected === "about"
                      ? "font-semibold hover:cursor-pointer text-md"
                      : "font-semibold hover:cursor-pointer text-md text-gray-500"
                  }
                >
                  About
                </h1>
              </div>
              <div onClick={() => setFilterKey("lessons")}>
                <h1
                  onClick={() => setselected("lessons")}
                  className={
                    selected === "lessons"
                      ? "font-semibold hover:cursor-pointer text-md"
                      : "font-semibold hover:cursor-pointer text-md text-gray-500"
                  }
                >
                  Lessons Overview
                </h1>
              </div>
        
              <div onClick={() => setFilterKey("reviews")}>
                <h1
                  onClick={() => setselected("reviews")}
                  className={
                    selected === "reviews"
                      ? "font-semibold hover:cursor-pointer text-md"
                      : "font-semibold hover:cursor-pointer text-md text-gray-500"
                  }
                >
                  Reviews
                </h1>
              </div>
             
              </div>
              <div className="flex mt-2 w-full ml-4">
                <hr
                  className={
                    selected === "about"
                      ? "bg-teal-700 h-[0.2rem] w-40"
                      : "bg-gray-300 h-[0.2rem] w-40"
                  }
                />
                <hr
                  onClick={() => setselected("lessons")}
                  className={
                    selected === "lessons"
                    ? "bg-teal-700 h-[0.2rem] w-56"
                    : "bg-gray-300 h-[0.2rem] w-56"
                  }
                />
                <hr
                  className={
                    selected === "reviews"
                    ? "bg-teal-700 h-[0.2rem] w-40"
                    : "bg-gray-300 h-[0.2rem] w-40"
                  }
                />
              </div>
            </div>         
          <div className="mt-6 w-full">
            <div className="filter-container">
              <div className="filter-item filters about mx-4 w-full h-[10rem] overflow-y-scroll">
                <h1 className="text-xl font-semibold mt-2">About Course</h1>
                <p className="text-gray-500 font-light text-sm mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fringilla semper penatibus sed blandit metus, orci, quis
                  mattis. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Fringilla semper penatibus sed blandit metus, orcAi,
                  quis mattis. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Fringilla semper penatibus sed blandit metus,
                  orcAi, quis mattis.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fringilla semper penatibus sed blandit metus, orci, quis
                  mattis.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fringilla semper penatibus
                  sed blandit metus, orci, quis mattis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fringilla semper penatibus
                  sed blandit metus, orcAi, quis mattis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fringilla semper penatibus
                  sed blandit metus, orci, quis mattis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fringilla semper penatibus
                  sed blandit metus, orci, quis mattis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fringilla semper
                  penconsectetur adipiscing elit. Fringilla semper penatibus sed
                  blandit metus, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Fringilla semper penatibus sed blandit metus,
                  orci, quis mattis. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Fringilla semper penatibus sed blandit metus,
                  orcAi, quis mattis. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Fringilla Lorem ipsum dolor sit amet,
                  consectetur orci, quis mattis. Lorem ipsum dolor sit amet,
                  semper penatibus sed mattis. Lorem ipsum dolor sit
                </p>
              </div>

              <div className="filter-item filters lessons mx-4 w-full mb-4 p-4 rounded-2xl bg-gray-100">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-xl mt-2">Course Content</h1>
                  <div className="flex h-[1rem] gap-x-1 mr-4 mt-3">
                    <img src={content} alt="w-2 h-2" />
                    <p className="text-xs text-gray-500">110+ Content</p>
                    <img src={divider} alt="" className="mx-2"/>
                    <img src={clock} alt="" />
                    <p className="text-xs text-gray-500">150 Hours</p>
                  </div>
                </div>
                <div className="flex gap-x-5 mt-4 h-[12rem] overflow-y-scroll">
                      <div className="grid grid-cols-2 gap-x-5">
                      {coursecontent.map((course) => (
 <div className="flex gap-x-3 mb-3 h-14 bg-white p-1.5 w-[24rem] rounded-lg justify-between">
                        <h1 className="mx-3 my-auto">{course.sno}.  {course.name}</h1>
                        <p className="text-gray-400 mr-4 my-auto text-sm">{course.duration}</p>
                    </div>
                                  ))}
                  </div>
             
                </div>
              </div>

              <div className="filter-item filters reviews mb-4 w-full mx-4">
                <div className="flex-col space-y-6 h-[13rem] overflow-y-scroll">
              {reviews.map((review) => (
                   <div className="flex-col">
                   <div className="flex">
                    <div className="bg-violet-300 rounded-full">
                    <img src={avatar} alt="" className="-mt-1"/>
                    </div>
                    <div className="flex-col ml-3 mt-1">
                      <h1 className="font-semibold">{review.user}</h1>
                      <div className="flex gap-x-3 mt-1 text-xs text-gray-400">
                        <p>{review.rating}</p>
                        {/*add star logic here */}
                        <img src={divider} alt=""/>
                        <p>{review.time}</p>
                      </div>
                    </div>
                   </div>
                   <p className="mt-4 ml-2 text-xs text-gray-400 mr-8">{review.review}</p>
                   </div>
                    
                  ))}
                </div>
              </div>
            </div>
          </div>
        <div className="mt-4">
          <div className="flex justify-between mt-6 mx-4">
          <h1 className="font-semibold text-2xl">Related Courses</h1>
            <a className="hover:cursor-pointer" href="">
              <h2 className="text-gray-500">View All</h2>
            </a>
          </div>
          <div className="mt-6 mx-4 w-full">
            <div className="filter-container">
              <div className="flex gap-y-3 flex-wrap">
                <div className="filter-item filters enrolled mr-4 mb-4 w-[15rem] p-2 shadow-md shadow-gray-300 rounded-lg">
                  <img src={course1} alt="" />
                  <div className="flex mt-2 justify-between">
                    <div>
                      {/*integrate mapping here */}
                      <h1 className="font-semibold">Course Name</h1>
                      <p className="flex text-xs text-gray-500">
                        1K Reviews - 5.0
                        <span>
                          <img src={star} alt="" className="ml-2" />
                        </span>
                      </p>
                    </div>
                    <div className="bg-teal-500 text-sm py-0.5 h-6 text-white px-1.5 rounded-lg">$80</div>
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
                  <div className="flex mt-2 justify-between">
                    <div>
                      <h1 className="font-semibold">Course Name</h1>
                      <p className="flex text-xs text-gray-500">
                      1K Reviews - 5.0
                        <span>
                          <img src={star} alt="" className="ml-2" />
                        </span>
                      </p>
                    </div>
                    <div className="bg-teal-500 text-sm py-0.5 h-6 text-white px-1.5 rounded-lg">$80</div>
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
                  <div className="flex mt-2 justify-between">
                    <div>
                      <h1 className="font-semibold">Course Name</h1>
                      <p className="flex text-xs text-gray-500">
                      1K Reviews - 5.0
                        <span>
                          <img src={star} alt="" className="ml-2" />
                        </span>
                      </p>
                    </div>
                    <div className="bg-teal-500 text-sm py-0.5 h-6 text-white px-1.5 rounded-lg">$80</div>
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

export default CourseDetail;
