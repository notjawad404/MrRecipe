import React from 'react'
import back from "../data/back.svg";
import card from "../data/Card.svg"
import paypal from "../data/paypal.svg"
import Visa from "../data/Visa.svg"


const Payment = () => {
  return (
    <div className=" bg-white w-[56vw]">
         <a href="./coursedetail"><div className="flex">
          <img src={back} alt="" className="w-2 h-3 mr-6 mt-1.5" />
          <h2 className="text-md">Back</h2>   
        </div></a>
        <div className="bg-white mt-6 mb-10">
          <h1 className="font-semibold text-2xl">Payment Details</h1>
          <div className="flex-col border mt-4 rounded-lg">
           <div className='flex gap-x-6 p-6'>
           <img src={card} alt=''/>
           <h1 className='text-lg font-medium'>Registered cards</h1>
           </div>
           <hr className='w-[90%] mx-6 mb-4'/>
           <div className='flex'>
            <div className='border ml-6 flex gap-x-16 mb-4 rounded-lg p-2'>
            <input type='radio' />
            <div className='flex'>
 <div className='flex-col'>
              <p className='font-bold'>**** **** 8304</p>
              <div className='border flex pl-2 text-gray-500 text-sm'>
                <p>Visa .</p>
                <a className='underline ml-1'>Edit</a>
              </div>
            </div>
            </div>
            <img src={Visa} alt=''/>
            </div>
            <div className='border ml-8 flex gap-x-16 mb-4 rounded-lg p-2'>
            <input type='radio' />
            <div className='flex'>
 <div className='flex-col'>
              <p className='font-bold'>**** **** 8304</p>
              <div className='border flex text-gray-500 text-sm'>
                <p>Paypal .</p>
                <a className='underline ml-1'>Edit</a>
              </div>
            </div>
            </div>
            <img src={paypal} alt=''/>
            </div>
           </div>
          </div>
          <div className="flex-col border mt-4 rounded-lg">
           <div className='flex gap-x-6 p-6'>
           <img src={card} alt=''/>
           <h1 className='text-lg font-medium'>Add New Card</h1>
           </div>
           <hr className='w-[90%] mx-6 mb-4'/>
           <p className='ml-6 font-medium'>Choose Payment Method</p>
           <div className='flex'>
            <div className='border ml-8 mt-4 flex-col mb-4 rounded-xl px-3 py-2 h-[5.65rem] focus:border-teal-600'>
            <input type='radio' className='ml-20 focus:bg-teal-600'/>
 <img src={Visa} alt='' className='w-12 h-12 -mt-4 mx-6'/>
                <p className=' text-gray-500 text-sm mx-3 '>Visa Card</p>
            </div>
            <div className='border ml-8 mt-4 flex-col mb-4 rounded-xl px-3 py-2 h-[5.65rem]'>
            <input type='radio' className='ml-20'/>
 <img src={Visa} alt='' className='w-12 h-12 -mt-4 mx-6'/>
                <p className=' text-gray-500 text-sm mx-3 '>Visa Card</p>
            </div>
            <div className='border ml-8 mt-4 flex-col mb-4 rounded-xl px-3 py-2 h-[5.65rem]'>
            <input type='radio' className='ml-20'/>
 <img src={Visa} alt='' className='w-12 h-12 -mt-4 mx-6'/>
                <p className=' text-gray-500 text-sm mx-3 '>Visa Card</p>
            </div>
        
           </div>

           <form>
        <div className="pb-4">
        <p className='ml-8 mt-2 font-medium'>Credit Card Information</p>

          <div className="mt-4 mx-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-700">
                Card Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder='1234 0000 0000 0000'
                  className="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-700">
                CVV
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder='1234'
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-700">
                Name On Card
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder='Eman'
                  autoComplete="given-name"
                  className="block w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-700">
                Expire
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  placeholder='23/07/2023'
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-md mx-8 mb-4 medologybg px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          ADD NEW CARD
        </button>
    </form>
          </div>
        </div>
    </div>
  )
}

export default Payment