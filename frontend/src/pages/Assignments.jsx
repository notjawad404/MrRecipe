import {useState} from 'react'
import back from "../data/back.svg"
import ModalAssignment from "../components/ModalAssignment";

const Assignments = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='App bg-white w-full overflow-y-auto mb-4'>
               <div className="flex ml-10 mt-3">
          <img src={back} alt="" className=" w-2 h-3 mr-6 mt-1.5" />
          <h2 className="text-md">Back</h2>
        </div>
        <h1 className="font-semibold text-3xl mt-6 ml-10">Assignments</h1>
        <div className='flex justify-between mx-14 mt-4 mr-20'>
            <h2 className='text-lg font-medium text-gray-500'>No</h2>
            <h2 className='text-lg font-medium text-gray-500'>File</h2>
            <h2 className='text-lg font-medium text-gray-500'>Submit</h2>
            <h2 className='text-lg font-medium text-gray-500'>Status</h2>
            <h2 className='text-lg font-medium text-gray-500'>Results</h2>
        </div>
        <div className='flex-col space-y-4 overflow-y-scroll justify-between mx-14 mt-4'>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>1</p>
            <p className='text-gray-500'>Download.pdf</p>
            <p className='text-gray-400'>Uploaded.pdf</p>
            <p className='text-gray-500'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>                <a className="text-teal-400 underline text-xs mt-1">Read Comments</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>2</p>
            <p className='text-gray-500'>Download.pdf</p>
            <p className='text-gray-400'>Uploaded.pdf</p>
            <p className='text-gray-500'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>                <a className="text-teal-400 underline text-xs mt-1">Read Comments</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>3</p>
            <p className='text-gray-500'>Download.pdf</p>
            <p className='text-gray-400'>Uploaded.pdf</p>
            <p className='text-gray-500'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>                <a className="text-teal-400 underline text-xs mt-1">Read Comments</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>4</p>
            <p className='text-gray-500'>Download.pdf</p>
            <p className='text-gray-400'>Uploaded.pdf</p>
            <p className='text-gray-500'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>                <a className="text-teal-400 underline text-xs mt-1">Read Comments</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>5</p>
            <p className='text-gray-500'>Download.pdf</p>
            <p className='text-gray-400'>Uploaded.pdf</p>
            <p className='text-gray-500'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>                <a className="text-teal-400 underline text-xs mt-1">Read Comments</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-1.5 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>6</p>
            <p className='text-gray-500'>Download.pdf</p>
            <p className='text-gray-400'>Uploaded.pdf</p>
            <p className='text-gray-500'>Finished</p>
            <div className='flex-col'><p className='text-gray-500'>90/100</p>                <a className="text-teal-400 underline text-xs mt-1">Read Comments</a>
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-4 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>7</p>
            <p className='text-gray-500'>Download.pdf</p>
            <p className='text-teal-400 underline'>Uploading file</p>
            <p className='text-gray-500'>Open</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>              
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-4 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>8</p>
            <p className='text-gray-500 mr-8'>Download.pdf</p>
            <button
        className="hover:cursor-pointer text-teal-400 underline"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Upload
      </button>            <p className='text-gray-500 ml-8'>Open</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>                
</div>
          </div>
          <div className='border-2 border-gray-200 px-4 py-4 rounded-xl flex justify-between items-center w-full'>
            <p className='text-gray-500'>9</p>
            <p className='text-gray-500 mr-8'>Download.pdf</p>
            <p className='text-gray-400'>Locked</p>
            <p className='text-gray-500 ml-8'>Locked</p>
            <div className='flex-col'><p className='text-gray-500 ml-20'>--</p>                
</div>
          </div>
          </div>
            {modalOpen && <ModalAssignment setOpenModal={setModalOpen} />}
</div>

  )
}

export default Assignments