import React from 'react'
import close from "../data/Closemodal.png"
import upload from "../data/Upload.png";

function ModalAssignment({ setOpenModal }) {
    return (
      <div className="modalBackground w-[100vw] z-[999] h-[100vh] ">
        <div className="modalContainer mr-[16rem]">
          <div className="flex justify-between mt-2 mx-4">
        <h1 className="text-xl font-semibold">Upload</h1>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <img src={close} alt=""/>
            </button>
          </div>
           <div className="h-[30rem] flex-col  mt-6 bg-gray-100 p-4 rounded-lg m-4">
            <img src={upload} alt='' className='mx-auto mt-[20%]'/>
            <p className='text-sm font-semibold mt-8 text-center'>Drag & drop files or Browse</p>
            <p className='text-xs text-gray-500 mt-2 text-center'>Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
          </div>
          <div className="mt-4">
            <button
            className='medologybg w-[23rem] text-white font-semibold text-sm mx-4 rounded-lg h-10 '
            //submit assignment
            >
              UPLOAD FILES
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalAssignment;