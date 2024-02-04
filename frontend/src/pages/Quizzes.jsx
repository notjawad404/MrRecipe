import {useState} from 'react'
import back from "../data/back.svg"
import { Quiz } from '../components'
const Quizzes = () => {

  return (
    <div className='App bg-white w-full overflow-y-auto mb-4'>
               <div className="flex ml-10 mt-3">
          <img src={back} alt="" className=" w-2 h-3 mr-6 mt-1.5" />
          <h2 className="text-md">Back</h2>
        </div>
        <h1 className="font-semibold text-3xl mt-6 ml-10">Quizzes</h1>
        <div className='flex justify-between mx-16 mt-4 mr-28'>
            <h2 className='text-lg font-medium text-gray-500'>No</h2>
            <h2 className='text-lg font-medium text-gray-500'>Duration</h2>
            <h2 className='text-lg font-medium text-gray-500'>Status</h2>
            <h2 className='text-lg font-medium text-gray-500'>Results</h2>
        </div>
        <div className='flex-col space-y-4 overflow-y-scroll justify-between mx-14 mt-4'>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>1</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-400'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>                
            <a className="text-teal-400 underline text-xs mt-1">Review Answers</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>2</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-400'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>               
            <a className="text-teal-400 underline text-xs mt-1">Review Answers</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full py-4'>
            <p className='text-gray-500'>3</p>
            <p className='text-gray-500'>2 min</p>
            <p className='mr-4'>Open</p>
            <div className='flex-col'><a className="text-teal-400 underline mr-12 hover:cursor-pointer" href='./quiz'>Begin</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full py-4'>
            <p className='text-gray-500'>4</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-500'>Locked</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>              
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full py-4'>
            <p className='text-gray-500'>5</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-500'>Locked</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>              
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full py-4'>
            <p className='text-gray-500'>6</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-500'>Locked</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>              
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-4 rounded-xl flex justify-between items-center w-full py-4'>
            <p className='text-gray-500'>7</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-500'>Locked</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>              
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-4 rounded-xl flex justify-between items-center w-full py-4'>
            <p className='text-gray-500'>8</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-500'>Locked</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>              
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-4 rounded-xl flex justify-between items-center w-full py-4'>
            <p className='text-gray-500'>9</p>
            <p className='text-gray-500'>2 min</p>
            <p className='text-gray-500'>Locked</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>              
</div>
          </div>
          </div>
</div>

  )
}

export default Quizzes