import React from 'react'
import back from "../data/back.svg";
import payment from "../data/payment.svg"
import thumbnail from "../data/thumbnail.jpeg";

const PaymentConfirmation = () => {
  return (
    <div className="bg-white w-[70rem] mx-8 mt-4">
    <a href="./coursedetail"><div className="flex">
     <img src={back} alt="" className="w-2 h-3 mr-6 mt-1.5" />
     <h2 className="text-md">Back</h2>   
   </div></a>
   <div className="bg-white mt-6 mb-10">
     <h1 className="font-semibold text-2xl">Payment Confirmation</h1>
    <div className='flex bg-gray-100 mt-4 rounded-lg p-4'>
      <img src={payment} alt='' className=''/>
      <div className='flex-col ml-3 mt-2'>
        <h1 className='font-medium text-lg'>Your payment is confirmed</h1>
        <p className='text-xs mt-1 text-gray-500'>Kindly check your email for more details</p>
      </div>
    </div>
<div className='border rounded-lg flex-col p-4 border-t-0 '>
<h1 className="font-semibold text-xl">Payment Details</h1>
<hr className='bg-gray-300 mx-2 mt-3'/>
<div className='flex'>
  <div className='flex-col'>
<div className='text-gray-400 mt-4 mx-4 text-md flex justify-between w-[50rem]'>
  <p>User Card</p>
  <p>Payment Date</p>
</div>
<div className='flex justify-between text-lg font-bold mx-4 mt-3'>
<p className=''>**** **** **** 8304</p>
<p>23/07/2023<span className='font-normal'>(11:30 AM)</span></p>
</div>
<div className='border rounded-lg p-4 mt-3'>
<div className='flex justify-between text-xs mt-2'>
                <p>Subtotal</p>
                <p>$80.00</p>
                </div>
                <div className='flex justify-between text-xs mt-3'>
                <p>Discount (10%)</p>
                <p>-$10.00</p>
                </div>
                <hr className='hrblack mt-3'/>
                <div className='flex justify-between mt-2'>
                <h1 className="font-semibold">Total</h1>
                <h1 className="font-semibold">$70.00</h1>
                </div>
                <button
          type="submit"
          className="rounded-md ml-[37rem] mt-4  medologybg px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-teal-700 hover:border-teal-700 hover:border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
                  {/*invoice */}
<a href='/paymentconfirmation'>DOWNLOAD INVOICE</a></button>
</div>
</div>
<div className='flex-col py-5 px-3 rounded-xl ml-2 mt-4 bg-gray-100'>
        <img src={thumbnail} className='w-[18rem] h-[11rem] rounded-lg'/>
                <button
          type="submit"
          className="rounded-md mx-4 mt-4 medologybg px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-teal-700 hover:border-teal-700 hover:border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
                  {/*unlocks course*/}
<a href='/coursedetail'>GO TO COURSE</a></button>

      </div>
</div>
</div>

    
   </div>
</div>  )
}

export default PaymentConfirmation