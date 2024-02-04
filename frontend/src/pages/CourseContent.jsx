import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import close from "../data/close.svg"
import openpic from "../data/openpic.svg"
import back from "../data/back.svg";
import thumbnail from "../data/thumbnail.jpeg";
import download from "../data/download.svg";
import Document from "../data/Document.svg";
import downloadblack from "../data/downloadblack.svg";
import Lock from "../data/Lock.svg"
import unlocked from "../data/unlock.svg"
import courseclose from "../data/courseclose.svg"
import coursegraph from "../data/coursegraph.png"
import edit from "../data/Edit.svg"
import openlink from "../data/openlink.svg"
import quizunlocked from "../data/quizunlocked.svg"
import star from "../data/star.svg";
import content from "../data/content.svg";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import Isotope from "isotope-layout";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

const course = [
  {
    name: "First content name",
    timestamp: "1:00",
    locked: false,
  },
  {
    name: "Second content name",
    timestamp: "2:00",
    locked: true,
  },
  {
    name: "Third content name",
    timestamp: "3:00",
    locked: true,
  },
  {
    name: "Fourth content name",
    timestamp: "4:00",
    locked: true,
  },
  {
    name: "Fifth content name",
    timestamp: "5:00",
    locked: true,
  },
  // More questions...
];

const assignments = [
  {
    name: "First Assignment",
    locked: false,
  },
  {
    name: "Second Assignment",
    locked: true,
  },
  {
    name: "Third Assignment",
    locked: true,
  },
  {
    name: "Fourth Assignment",
    locked: true,
  },
  {
    name: "Fifth Assignment",
    locked: true,
  },
  // More questions...
];
const quizzes = [
  {
    name: "First Quiz",
    locked: false,
  },
  {
    name: "Second Quiz",
    locked: true,
  },
  {
    name: "Third Quiz",
    locked: true,
  },
  {
    name: "Fourth Quiz",
    locked: true,
  },
  {
    name: "Fifth Quiz",
    locked: true,
  },
  // More questions...
];
const CourseContent = () => {
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
      <main className="lg:pl-[29rem] bg-white">
        <div className="absolute leftside md:top-16 bg-white xl:pl-[26rem]">
          <div className="px-4 mt-4 sm:px-6  ">
          <div className="bg-gray-100 mt-6 p-4 rounded-xl">
            <h1 className="font-semibold text-lg mb-2">Progress</h1>
            <hr />
            <img src={coursegraph} alt="" className="mx-auto"/>
</div>
            <div className="bg-gray-100 mt-6 py-2 rounded-xl overflow-y-scroll">
            <dl className="mt-2">
                <Disclosure
                  as="div"
                  className="px-4 py-2 rounded-xl bg-gray-100 space-y-3"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <div className="flex items-center gap-x-14"><h1 className="font-semibold text-lg mb-2">Course Content</h1>
                        <div className="flex">
                        <p className="text-sm">(1/100)</p>
                        <span className="flex h-7 items-center ">
                            {open ? (
                              <img src={courseclose}
                                className="rounded-full"
                                aria-hidden="true"
                              />
                            ) : (
                              <img src={close}
                                className="rounded-full ml-2 mb-4"
                                aria-hidden="true"
                              />
                            )}                           </span></div>
                        </div>
                        </Disclosure.Button>
                      </dt>
                      {course.map((course) => (

                      <Disclosure.Panel as="dd" className="mt-1 pr-12 bg-white rounded-xl py-3  flex justify-between">

<span className="ml-2 hover:cursor-pointer flex h-7 items-center ">
                            {course.locked ? (
                              <div className="bg-gray-100 rounded-full p-1 mx-2 "><img src={Lock}
                                className="rounded-full"
                                aria-hidden="true"
                              /></div>
                            ) : (
                              <div className="bg-gray-100 rounded-full p-1 mx-2"><img src={unlocked}
                                className="rounded-full"
                                aria-hidden="true"
                              /></div>
                            )}                           </span> 
                            <span className="text-md">
                            {course.name}
                          </span>
                          
                            <p className="-mr-4 text-sm">
                          {course.timestamp}
                        </p>
                      </Disclosure.Panel>              ))}

                    </>
                  )}
                </Disclosure>
            </dl>
            </div>
            <div className="bg-gray-100 mt-6 py-2 rounded-xl overflow-y-scroll">
            <dl className="mt-2">
                <Disclosure
                  as="div"
                  className="px-4 py-2 rounded-xl bg-gray-100 space-y-3"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full justify-between text-gray-900">
                        <div className="flex items-center justify-between gap-x-20"><h1 className="font-semibold text-lg mb-2">Assignments</h1>
                        <div className="flex">
<p className="text-sm">(1/30)</p>
                        <span className="flex h-7 items-center ">
                            {open ? (
                              <img src={courseclose}
                                className="rounded-full"
                                aria-hidden="true"
                              />
                            ) : (
                              <img src={close}
                                className="rounded-full ml-2 mb-4"
                                aria-hidden="true"
                              />
                            )}                           </span>
                        </div></div>
                        </Disclosure.Button>
                      </dt>
                      {assignments.map((assignment) => (

                      <Disclosure.Panel as="dd" className="mt-1 pr-12 px-2 bg-white rounded-xl py-3  flex justify-between">

<span className="ml-2 hover:cursor-pointer flex h-7 items-center">
                            {assignment.locked ? (
                              <div className="bg-gray-100 rounded-full p-1 mx-2"><img src={Lock}
                                className="rounded-full"
                                aria-hidden="true"
                              /></div>
                            ) : (
                              <div className="bg-gray-100 rounded-full  p-1 mx-2"><img src={edit}
                                className="rounded-full w-4 h-4"
                                aria-hidden="true"
                              /></div>
                            )}                           </span> 
                            <span >
                            {assignment.name}
                          </span>
                       <span>{assignment.locked ? (
                              <div className=""></div>
                            ) : (
                            <a href="/assignment"> <img src={openlink}
                             className="hover:cursor-pointer"
                             aria-hidden="true"
                              /></a>
                            )}      </span>
                      </Disclosure.Panel>              ))}

                    </>
                  )}
                </Disclosure>
            </dl>
            </div>
            <div className="bg-gray-100 mt-6 py-2 rounded-xl overflow-y-scroll">
            <dl className="mt-2">
                <Disclosure
                  as="div"
                  className="px-4 py-2 rounded-xl bg-gray-100 space-y-3"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <div className="flex items-center justify-between gap-x-32"><h1 className="font-semibold text-lg mb-2">Quizzes</h1>
                        <div className="flex">
                        <p className="text-sm">(1/10)</p>
                        <span className="flex h-7 items-center ">
                            {open ? (
                              <img src={courseclose}
                                className="rounded-full"
                                aria-hidden="true"
                              />
                            ) : (
                              <img src={close}
                                className="rounded-full ml-2 mb-3"
                                aria-hidden="true"

                              />
                            )}</span>
                        </div></div>
                        </Disclosure.Button>
                      </dt>
                      {quizzes.map((quiz) => (

                      <Disclosure.Panel as="dd" className="mt-1 pr-12 bg-white rounded-xl py-3  flex justify-between">

<span className="ml-2 hover:cursor-pointer flex h-7 items-center ">
                            {quiz.locked ? (
                              <div className="bg-gray-100 rounded-full p-1 mx-2"><img src={Lock}
                                className="rounded-full"
                                aria-hidden="true"
                              /></div>
                            ) : (
                              <div className="bg-gray-100 rounded-full p-1 mx-2"><img src={quizunlocked}
                                className="rounded-full w-4 h-4"
                                aria-hidden="true"
                              /></div>
                            )}                           </span> 
                            <span >
                            {quiz.name}
                          </span>
                       <span>{quiz.locked ? (
                              <div className=""></div>
                            ) : (
                            <a href="/quizzes"> <img src={openlink}
                                className="hover:cursor-pointer"
                                aria-hidden="true"
                              /></a>
                            )}      </span>
                      </Disclosure.Panel>              ))}

                    </>
                  )}
                </Disclosure>
            </dl>
            </div>
          </div>
        </div>
      </main>
      <aside className="absolute bg-white top-20 left-[15rem] w-[100vw] md:w-[58%] py-2 px-2 md:px-8 ">
        <div className="flex">
          <img src={back} alt="" className="w-2 h-3 mr-4 mt-1.5" />
          <h2 className="text-md">Back</h2>
        </div>
        <div className="bg-white mt-4">
          <h1 className="font-semibold text-3xl">Course Name</h1>
          <div className="flex items-center mt-4 gap-x-1">
            <p className="flex text-xs text-gray-500">
              5.0
              <span>
                <img src={star} alt="" className="ml-2" />
              </span>
            </p>
            <img src={divider} alt="" />
            <p className="text-xs text-gray-500">110+ Content</p>
            <img src={content} alt="w-2 h-2" />
            <img src={divider} alt="" />
            <p className="text-xs text-gray-500">150 Hours</p>
            <img src={clock} alt="" className="w-4 h-4"/>
          </div>
        </div>
        <div //video
          className="pb-12"
        >
          <div className="relative">
            <div className="mt-4 h-[32rem] rounded-2xl bg-white transition-all duration-300 sm:mt-4 flex justify-center border-black">
              <img
                src={thumbnail}
                alt="img/clips"
                className="relative inset-0 flex object-cover w-full h-full top-0 left-0 right-0 rounded-2xl opacity-100 z-10 transition-opacity duration-500"
              />
              <div className="bg-white/75 blur-effect-theme absolute mx-auto top-[6rem] lg:top-60 lg:left-[1rem] sm:top-24 sm:left-30 right-30 lg:right-0 opacity-100 z-50 w-16 h-16 md:w-14 md:h-14 sm:h-14 sm:w-14 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="icon-style play h-7 w-7 lg:h-10 lg:w-10 medologyfont"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <video
                autoPlay=""
                loop=""
                playsInline=""
                className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
              >
                <source type="video/mp4" src="/assets/clip-69194156.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between ">
            <div className="flex gap-x-16 ml-10">
              <div onClick={() => setFilterKey("about")}>
                <h1
                  onClick={() => setselected("about")}
                  className={
                    selected === "about"
                      ? "font-semibold hover:cursor-pointer text-md "
                      : "font-semibold hover:cursor-pointer text-md text-gray-500"
                  }
                >
                  About
                </h1>
              </div>
              <div onClick={() => setFilterKey("download")}>
                <h1
                  onClick={() => setselected("download")}
                  className={
                    selected === "download"
                      ? "font-semibold hover:cursor-pointer text-md "
                      : "font-semibold hover:cursor-pointer text-md text-gray-500"
                  }
                >
                  Download files
                </h1>
              </div>
              <div onClick={() => setFilterKey("Links")}>
                <h1
                  onClick={() => setselected("Links")}
                  className={
                    selected === "Links"
                      ? "font-semibold hover:cursor-pointer text-md "
                      : "font-semibold hover:cursor-pointer text-md text-gray-500"
                  }
                >
                  Links
                </h1>
              </div>
              <div onClick={() => setFilterKey("FAQs")}>
                <h1
                  onClick={() => setselected("FAQs")}
                  className={
                    selected === "FAQs"
                      ? "font-semibold hover:cursor-pointer text-md "
                      : "font-semibold hover:cursor-pointer text-md text-gray-500"
                  }
                >
                  FAQs
                </h1>
              </div>
            </div>
          </div>
          <div className="flex mt-2 w-full">
                <hr
                  className={
                    selected === "about"
                      ? "bg-teal-700 h-[0.2rem] w-32"
                      : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
                <hr
                  className={
                    selected === "download"
                    ? "bg-teal-700 h-[0.2rem] w-40"
                    : "bg-gray-300 h-[0.2rem] w-40"
                  }
                />
                 <hr
                  className={
                    selected === "Links"
                    ? "bg-teal-700 h-[0.2rem] w-32"
                    : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
                 <hr
                  className={
                    selected === "FAQs"
                    ? "bg-teal-700 h-[0.2rem] w-32"
                    : "bg-gray-300 h-[0.2rem] w-32"
                  }
                />
              </div>
          <div className="mt-6 w-full">
            <div className="filter-container">
              <div className="filter-item filters about mx-4 w-full mb-16 h-[10rem] overflow-y-scroll">
                <h1 className="text-2xl font-semibold ">About Course</h1>
                <p className="text-gray-500 font-light text-sm mt-2">
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

              <div className="filter-item filters download mx-4 w-full mb-4">
                <div className="flex justify-between ">
                  <h1 className="font-semibold text-2xl">Lesson files</h1>
                  <button className="medologybg text-white text-sm rounded-lg flex justify-between px-3 py-2.5 w-[10rem]">
                    <img src={download} alt="" />
                    DOWNLOAD ALL
                  </button>
                </div>
                <div className="flex gap-x-10 mt-2 h-[10rem] overflow-y-scroll">
                  <div className="flex-col ">
                    <div className="flex gap-x-3 mb-3 border p-1.5 w-[20rem] rounded-lg">
                      <img src={Document} alt="" />
                      <div className="flex-col">
                        <h1 className="font-semibold text-sm">File name.pdf</h1>
                        <h2 className="text-sm text-gray-500">
                          File size: 1.5 MB
                        </h2>
                      </div>
                      <img src={downloadblack} alt="" className="ml-32" />
                    </div>
                    <div className="flex gap-x-3 mb-3 border p-1.5 w-[20rem] rounded-lg">
                      <img src={Document} alt="" />
                      <div className="flex-col">
                        <h1 className="font-semibold text-sm">File name.pdf</h1>
                        <h2 className="text-sm text-gray-500">
                          File size: 1.5 MB
                        </h2>
                      </div>
                      <img src={downloadblack} alt="" className="ml-32" />
                    </div>
                    <div className="flex gap-x-3 mb-3 border p-1.5 w-[20rem] rounded-lg">
                      <img src={Document} alt="" />
                      <div className="flex-col">
                        <h1 className="font-semibold text-sm">File name.pdf</h1>
                        <h2 className="text-sm text-gray-500">
                          File size: 1.5 MB
                        </h2>
                      </div>
                      <img src={downloadblack} alt="" className="ml-32" />
                    </div>
                  </div>
                  <div className="flex-col ">
                    <div className="flex gap-x-3 mb-3 border p-1.5 w-[20rem] rounded-lg">
                      <img src={Document} alt="" />
                      <div className="flex-col">
                        <h1 className="font-semibold text-sm">File name.pdf</h1>
                        <h2 className="text-sm text-gray-500">
                          File size: 1.5 MB
                        </h2>
                      </div>
                      <img src={downloadblack} alt="" className="ml-32" />
                    </div>
                    <div className="flex gap-x-3 mb-3 border p-1.5 w-[20rem] rounded-lg">
                      <img src={Document} alt="" />
                      <div className="flex-col">
                        <h1 className="font-semibold text-sm">File name.pdf</h1>
                        <h2 className="text-sm text-gray-500">
                          File size: 1.5 MB
                        </h2>
                      </div>
                      <img src={downloadblack} alt="" className="ml-32" />
                    </div>
                    <div className="flex gap-x-3 mb-3 border p-1.5 w-[20rem] rounded-lg">
                      <img src={Document} alt="" />
                      <div className="flex-col">
                        <h1 className="font-semibold text-sm">File name.pdf</h1>
                        <h2 className="text-sm text-gray-500">
                          File size: 1.5 MB
                        </h2>
                      </div>
                      <img src={downloadblack} alt="" className="ml-32" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-item filters Links  mx-4 w-full mb-4">
                <h1 className="font-semibold text-2xl">Articles</h1>
                <div className="flex-col space-y-4 mt-2 h-[10rem] overflow-y-scroll">
                  <div className="flex-col ">
                    <h1 className="font-semibold text-sm">
                      https://www.behance.net/gallery/149814943/E-learning-platform
                    </h1>
                    <h2 className="text-xs text-gray-500">
                      Berif: rem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </h2>
                  </div>
                  <div className="flex-col">
                    <h1 className="font-semibold text-sm">
                      https://www.behance.net/gallery/149814943/E-learning-platform
                    </h1>
                    <h2 className="text-xs text-gray-500">
                      Berif: rem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </h2>
                  </div>
                  <div className="flex-col">
                    <h1 className="font-semibold text-sm">
                      https://www.behance.net/gallery/149814943/E-learning-platform
                    </h1>
                    <h2 className="text-xs text-gray-500">
                      Berif: rem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </h2>
                  </div>
                  <div className="flex-col">
                    <h1 className="font-semibold text-sm">
                      https://www.behance.net/gallery/149814943/E-learning-platform
                    </h1>
                    <h2 className="text-xs text-gray-500">
                      Berif: rem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="filter-item filters FAQs mb-4 w-full mx-4">
                <h1 className="font-semibold text-2xl">
                  Frequently Asked Questions
                </h1>
                <div className="flex-col mt-4 h-[10rem] overflow-y-scroll">
                <dl className=" space-y-2">
              {faqs.map((faq) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className="px-4 py-3 rounded-xl border"
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-sm font-semibold text-black">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center ">
                            {open ? (
                              <img src={openpic}
                                className="rounded-full"
                                aria-hidden="true"
                              />
                            ) : (
                              <img src={close}
                                className="rounded-full"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-1 pr-12">
                        <p className="text-xs font-normal text-gray-500">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CourseContent;
