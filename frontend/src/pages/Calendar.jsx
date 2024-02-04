import { Fragment, useState, useEffect } from 'react'
import next from "../data/next.svg"
import prev from "../data/prev.svg"
import Isotope from "isotope-layout";
import openlink from "../data/openlink.svg"
import calendar from "../data/Calendar.svg"
import Clock from "../data/Clock.svg"
const weektemp=[
  {
    day: "SUN",
    isCurrentDay: false
  },
  {
    day: "MON",
    isCurrentDay: false
  },
  {
    day: "TUE",
    event: "Quiz",
    subject: "Course Name",
    isCurrentDay: true
  },
  {
    day: "WED",
    isCurrentDay: false,
    subject: "Course Name",
  },
  {
    day: "THU",
    isCurrentDay: false
  },
  {
    day: "FRI",
    isCurrentDay: false,
    subject: "Course Name"
  },
  {
    day: "SAT",
    isCurrentDay: false
  }
]
const days = [
  { date: '2024-01-01', isCurrentMonth: true, events: [] },
  { date: '2024-01-02', isCurrentMonth: true, events: [] },
  {
    date: '2024-01-03',
    isCurrentMonth: true,
    events: [
      { id: 1, name: 'Design review', datetime: '2024-01-03T10:00', href: '#' },
      { id: 2, name: 'Sales meeting', datetime: '2024-01-03T14:00', href: '#' },
    ],
  },
  { date: '2024-01-04', isCurrentMonth: true, events: [] },
  { date: '2024-01-05', isCurrentMonth: true, events: [] },
  { date: '2024-01-06', isCurrentMonth: true, events: [] },
  {
    date: '2024-01-07',
    isCurrentMonth: true,
    events: [{ id: 3, name: 'Date night', datetime: '2024-01-08T18:00', href: '#' }],
  },
  { date: '2024-01-08', isCurrentMonth: true, events: [] },
  { date: '2024-01-09', isCurrentMonth: true, events: [] },
  { date: '2024-01-10', isCurrentMonth: true, events: [] },
  { date: '2024-01-11', isCurrentMonth: true, events: [] },
  {
    date: '2024-01-12',
    isCurrentMonth: true,
    isToday: true,
    events: [{ id: 6, name: "Sam's birthday party", datetime: '2024-01-25T14:00', href: '#' }],
  },
  { date: '2024-01-13', isCurrentMonth: true, events: [] },
  { date: '2024-01-14', isCurrentMonth: true, events: [] },
  { date: '2024-01-15', isCurrentMonth: true, events: [] },
  { date: '2024-01-16', isCurrentMonth: true, events: [] },
  { date: '2024-01-17', isCurrentMonth: true, events: [] },
  { date: '2024-01-18', isCurrentMonth: true, events: [] },
  { date: '2024-01-19', isCurrentMonth: true, events: [] },
  { date: '2024-01-20', isCurrentMonth: true, events: [] },
  { date: '2024-01-21', isCurrentMonth: true, events: [] },
  {
    date: '2024-01-22',
    isCurrentMonth: true,
    isSelected: true,
    events: [
      { id: 4, name: 'Maple syrup museum', datetime: '2024-01-22T15:00', href: '#' },
      { id: 5, name: 'Hockey game', datetime: '2024-01-22T19:00', href: '#' },
    ],
  },
  { date: '2024-01-23', isCurrentMonth: true, events: [] },
  { date: '2024-01-24', isCurrentMonth: true, events: [] },
  { date: '2024-01-25', isCurrentMonth: true, events: [] },
  { date: '2024-01-26', isCurrentMonth: true, events: [] },
  { date: '2024-01-27', isCurrentMonth: true, events: [] },
  { date: '2024-01-28', isCurrentMonth: true, events: [] },
  { date: '2024-01-29', isCurrentMonth: true, events: [] },
  { date: '2024-01-30', isCurrentMonth: true, events: [] },
  { date: '2024-01-31', isCurrentMonth: true, events: [] },
]
const selectedDay = days.find((day) => day.isSelected)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {
  const [selected, setselected] = useState("all")
  const [func, setfunc] = useState("calendar")
  //implement filtering for timeline
  const [timeline, settimeline] = useState("monthly")
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState(".calendar");

  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item", 
        layoutMode: "fitRows",
      })
    );
  }, []); 
  useEffect(() => {
    if (isotope) {
      filterKey === ".calendar"
        ? isotope.arrange({ filter: `.calendar` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  // Filter dates of the current month
  const currentMonthDates = days.filter(day => {
    const currentDate = new Date(day.date);
    const currentMonth = new Date().getMonth();
    return currentDate.getMonth() === currentMonth;
  });

  return (
    <div className="flex-col md:flex overflow-y-auto bg-white h-full w-full">
    <main className="lg:pl-[31rem] bg-white">
      <div className="absolute leftside md:top-16 bg-white xl:pl-[30rem]">
      <div className="px-4 mt-4 sm:px-6  ">
      <div className="bg-gray-100 mt-6 p-4 w-[16rem] rounded-xl">
      <h1 className="font-semibold text-md mb-2">Your Agenda</h1>
            <hr className='w-[90%] mt-2'/>
            <p className="text-sm text-gray-400 ml-2 mt-4">13 May:</p>
            <div className='flex-col mx-2 mt-2'>
              <h1 className='text-md font-medium'>Quiz 3</h1>
              <p className='text-sm  text-gray-600'>Course Name</p>
            </div>
            <div className='flex-col mx-2 mt-2'>
              <h1 className='text-md font-medium'>Assignment 2</h1>
              <p className='text-sm  text-gray-600'>Course Name</p>
            </div>
            <hr className='w-[90%] mt-4'/>
            <p className="text-sm text-gray-400 ml-2 mt-4">14 May:</p>
            <div className='flex-col mx-2 mt-2'>
              <h1 className='text-md font-medium'>Quiz 4</h1>
              <p className='text-sm  text-gray-600'>Course Name</p>
            </div>
            </div>
            <div className="bg-gray-100 mt-6 p-4 w-[16rem] rounded-xl overflow-y-scroll">
            <h1 className="font-semibold text-md ">Upcoming Events</h1>
         <div className='flex-col border-2 mt-2 pb-2 bg-white rounded-xl'> 
              <div className='flex justify-between mx-4 mt-2'>
              <h1 className='text-sm font-medium'>Event Name</h1>
              <img src={openlink} alt='' className='h-[10%] w-[10%]'/>
            </div>
            <hr className='w-[90%] mt-1  mx-3'/>
            <div className='flex mx-4 mt-2'>
              <img src={calendar} alt=''/>
              <p className='text-sm  text-gray-400 ml-2'>10 May, 2024</p>
            </div>
            <div className='flex mx-4 mt-2'>
              <img src={Clock} alt=''className='h-[8.5%] w-[8.5%]'/>
              <p className='text-sm ml-2 text-gray-400'>10:00 - 11:00 am</p>
            </div>
            <p className='text-xs ml-3 my-1 text-gray-400'>Event description i cant think of anything else....</p>
</div>
<div className='flex-col border-2 mt-2 pb-2 bg-white rounded-xl'> 
              <div className='flex justify-between mx-4 mt-2'>
              <h1 className='text-sm font-medium'>Event Name</h1>
              <img src={openlink} alt='' className='h-[10%] w-[10%]'/>
            </div>
            <hr className='w-[90%] mt-1  mx-3'/>
            <div className='flex mx-4 mt-2'>
              <img src={calendar} alt=''/>
              <p className='text-sm  text-gray-400 ml-2'>10 May, 2024</p>
            </div>
            <div className='flex mx-4 mt-2'>
              <img src={Clock} alt=''className='h-[8.5%] w-[8.5%]'/>
              <p className='text-sm ml-2 text-gray-400'>10:00 - 11:00 am</p>
            </div>
            <p className='text-xs ml-3 my-1 text-gray-400'>Event description i cant think of anything else....</p>
</div>
            </div>
            </div>
</div>
    </main>
    <aside className="absolute bg-white top-20 left-[15rem] w-[100vw] md:w-[65%] py-2 px-2 md:px-8 ">
      <div className='flex justify-between'>
    <div className="flex-col"> 
           <div className="flex gap-x-24 ml-12">
              <div onClick={() => setFilterKey("calendar")}>
                <h1
                  onClick={() => setfunc("calendar")}
                  className={
                    func === "calendar"
                      ? "font-semibold hover:cursor-pointer text-2xl"
                      : "font-semibold hover:cursor-pointer text-2xl text-gray-500"
                  }
                >
                  Calendar
                </h1>
              </div>
              <div onClick={() => setFilterKey("todo")}>
                <h1
                  onClick={() => setfunc("todo")}
                  className={
                    func === "todo"
                      ? "font-semibold hover:cursor-pointer text-2xl"
                      : "font-semibold hover:cursor-pointer text-2xl text-gray-500"
                  }
                >
                  To-Do List
                </h1>
              </div>
              </div>
              <div className="flex mt-2 w-full ml-6">
                <hr
                  className={
                    func === "calendar"
                      ? "bg-teal-700 h-[0.2rem] w-48"
                      : "bg-gray-300 h-[0.2rem] w-48"
                  }
                />
                <hr
                  className={
                    func === "todo"
                    ? "bg-teal-700 h-[0.2rem] w-48"
                    : "bg-gray-300 h-[0.2rem] w-48"
                  }
                />
              </div>
            </div>  
            <div className="flex gap-x-4">
         <button onClick={()=>settimeline("weekly")}
        className={
          timeline === "weekly"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-1 rounded-md"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-1 rounded-md"
        }>Weekly</button>    
          <button onClick={()=>settimeline("monthly")}
        className={
          timeline === "monthly"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-1 rounded-md"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-1 rounded-md"
        }>Monthly</button>         
        </div></div>
      <div className='bg-gray-100 rounded-lg'>
    <div className="lg:flex lg:h-full lg:flex-col overflow-y-scroll m-4">
   
            <div className="filter-container">
<div className='filter-item filters calendar'>
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
       <div className='flex gap-x-3'><img src={prev}/><h1 className="text-xl font-semibold leading-6 text-gray-900">
       {timeline == "monthly" ? <time dateTime="2024-01-29">January 2024</time>: <time dateTime="2024-01-29">01 January, 2024 - 07 January, 2024</time>}
        </h1>
        <img src={next}/></div>
        <div className="flex ml-14">
         <button onClick={()=>setselected("all")}
        className={
          selected === "all"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2 rounded-l-md"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-2 rounded-l-md"
        }>All</button>    
          <button onClick={()=>setselected("quiz")}
        className={
          selected === "quiz"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-2"
        }>Quizzes</button>    
          <button onClick={()=>setselected("assignment")}
        className={
          selected === "assignment"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-2"
        }>Assignment</button>    
          <button onClick={()=>setselected("event")}
        className={
          selected === "event"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2 rounded-r-md"
            : "hover:cursor-pointer text-sm text-brack bg-gray-300 w-24 py-2 rounded-r-md"
        }>Events</button>         
        </div>
      </header>
      {timeline == "monthly" ? <div className='h-fit'> <div className="shadow ring-1 rounded-xl ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b rounded-xl border-gray-300 bg-gray-200 text-sm font-medium leading-6 text-gray-500 lg:flex-none">
          <div className="bg-white py-2 px-3">
            M<span className="sr-only sm:not-sr-only">ON</span>
          </div>
          <div className="bg-white py-2 px-3">
            T<span className="sr-only sm:not-sr-only">UE</span>
          </div>
          <div className="bg-white py-2 px-3">
            W<span className="sr-only sm:not-sr-only">ED</span>
          </div>
          <div className="bg-white py-2 px-3">
            T<span className="sr-only sm:not-sr-only">HU</span>
          </div>
          <div className="bg-white py-2 px-3">
            F<span className="sr-only sm:not-sr-only">RI</span>
          </div>
          <div className="bg-white py-2 px-3">
            S<span className="sr-only sm:not-sr-only">AT</span>
          </div>
          <div className="bg-white py-2 px-3">
            S<span className="sr-only sm:not-sr-only">UN</span>
          </div>
        </div>
        <div className="flex bg-gray-100 text-xs h-fit mb-2 leading-6 text-gray-700 lg:flex-auto">
         {/*for large screens */}
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
          {currentMonthDates.map((day) => (
              <div
                key={day.date}
                className={classNames(
                  day.isToday ? 'bg-gray-100' : 'bg-white text-gray-500',
                  'relative px-2 h-32 py-2'
                )}
              >
                <time
                  dateTime={day.date}
                  className={
                    'flex h-6 w-6 items-center justify-center rounded-full text-gray-400 text-md'
                  }
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                {day.events.length > 0 && (
                  <ol className="mt-2">
                    {day.events.slice(0, 2).map((event) => (
                      <li key={event.id}>
                        <a href={event.href} className="group flex">
                          <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-teal-700">
                            {event.name}
                          </p>
                        </a>
                      </li>
                    ))}
                    {day.events.length > 2 && <li className="text-gray-500">+ {day.events.length - 2} more</li>}
                  </ol>
                )}
              </div>
            ))}
          </div>
         {/*for small screens */}
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
          {currentMonthDates.map((day) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isToday && 'text-indigo-600',
                  !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                  !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500',
                  'flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10'
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                    'ml-auto'
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
                <span className="sr-only">{day.events.length} events</span>
                {day.events.length > 0 && (
                  <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                    {day.events.map((event) => (
                      <span key={event.id} className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    ))}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    {/*events for small screens */}
      {selectedDay?.events.length > 0 && (
        <div className="px-4 py-10 sm:px-6 lg:hidden">
          <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
            {selectedDay.events.map((event) => (
              <li key={event.id} className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                <div className="flex-auto">
                  <p className="font-semibold text-gray-900">{event.name}</p>
                  <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                    {/*<ClockIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                    {event.time}
                  </time>
                </div>
                <a
                  href={event.href}
                  className="ml-6 flex-none self-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 opacity-0 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400 focus:opacity-100 group-hover:opacity-100"
                >
                  Edit<span className="sr-only">, {event.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}</div> : <div className='h-fit mb-2'>
                {weektemp.map((week) => (<div className={week.isCurrentDay? 'bg-gray-100 rounded-xl flex' :'bg-white rounded-xl flex'}>
        <div className='shadow rounded-xl lg:flex lg:flex-auto lg:flex-col py-8 px-3'>
        <div className='flex gap-x-10'><p className='text-gray-700 text-sm'>{week.day}</p>
        {week.event ? <div className='flex gap-x-2 bg-emerald-100 px-2 py-2 -my-4 w-48 rounded-xl'><div className='h-10 w-1 bg-green-400 rounded-xl'/><div className='flex-col'><p className='text-sm text-green-500'>{week.event}</p><p className='text-xs text-green-400'>{week.subject}</p></div></div>: ""}</div>
        </div></div>))}
        </div>}
     
   </div>
 
   <div className='filter-item filters todo'>
      <header className="flex items-center justify-between gap-x-12 border-b border-gray-200 px-6 py-4 lg:flex-none w-[56rem]">
       <div className='flex gap-x-3'><img src={prev}/><h1 className="text-xl font-semibold leading-6 text-gray-900">
          <time dateTime="2024-01">January, 2023</time>
        </h1>
        <img src={next}/></div>
        <div className="flex ">
         <button onClick={()=>setselected("all")}
        className={
          selected === "all"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2 rounded-l-md"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-2 rounded-l-md"
        }>All</button>    
          <button onClick={()=>setselected("quiz")}
        className={
          selected === "quiz"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-2"
        }>Quizzes</button>    
          <button onClick={()=>setselected("assignment")}
        className={
          selected === "assignment"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2"
            : "hover:cursor-pointer text-sm text-black bg-gray-300 w-24 py-2"
        }>Assignment</button>    
          <button onClick={()=>setselected("event")}
        className={
          selected === "event"
            ? "hover:cursor-pointer text-sm text-white bg-teal-700 w-24 py-2 rounded-r-md"
            : "hover:cursor-pointer text-sm text-brack bg-gray-300 w-24 py-2 rounded-r-md"
        }>Events</button>         
        </div>
      </header>
      <div className="shadow ring-1 rounded-xl ring-black ring-opacity-5 lg:flex lg:flex-auto mb-2 lg:flex-col">
        <div className='bg-white rounded-xl flex-col space-y-4 mb-2 overflow-y-scroll'>
        <div className='flex gap-x-8 mx-6 py-4'><p className=' text-md text-gray-400'>No.</p>
        <p className=' text-md text-gray-400'>Name</p>
        </div>
        <div className='border rounded-xl mx-8 flex items-center py-3 gap-x-6'>
          <p className='text-gray-400 text-xs mx-4'>1</p>
          <div className='flex-col space-y-1'>
            <p className='text-sm font-semibold'>Quiz 3</p>
            <p className='text-xs text-gray-500'>Course Name</p>
          </div>
        </div>
        <div className='border rounded-xl mx-8 flex items-center py-3 gap-x-6'>
          <p className='text-gray-400 text-xs mx-4'>1</p>
          <div className='flex-col space-y-1'>
            <p className='text-sm font-semibold'>Quiz 3</p>
            <p className='text-xs text-gray-500'>Course Name</p>
          </div>
        </div>
        <div className='border rounded-xl mx-8 flex items-center py-3 gap-x-6'>
          <p className='text-gray-400 text-xs mx-4'>1</p>
          <div className='flex-col space-y-1'>
            <p className='text-sm font-semibold'>Quiz 3</p>
            <p className='text-xs text-gray-500'>Course Name</p>
          </div>
        </div>
        <div className='border rounded-xl mx-8 flex items-center py-3 gap-x-6'>
          <p className='text-gray-400 text-xs mx-4'>1</p>
          <div className='flex-col space-y-1'>
            <p className='text-sm font-semibold'>Quiz 3</p>
            <p className='text-xs text-gray-500'>Course Name</p>
          </div>
        </div>
        <div className='border rounded-xl mx-8 flex items-center py-3 gap-x-6'>
          <p className='text-gray-400 text-xs mx-4'>1</p>
          <div className='flex-col space-y-1'>
            <p className='text-sm font-semibold'>Quiz 3</p>
            <p className='text-xs text-gray-500'>Course Name</p>
          </div>
        </div>
       </div>
       
        </div>
      </div>
 
   </div> </div>
    </div>
    </aside>
  </div>
  )
}
