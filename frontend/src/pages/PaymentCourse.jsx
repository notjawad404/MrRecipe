import React from 'react'
import Payment from '../components/Payment'
import thumbnail from "../data/thumbnail.jpeg";
import star from "../data/star.svg";
import clock from "../data/Clock.svg";
import divider from "../data/divider.svg";
import content from "../data/content.svg";

const PaymentCourse = () => {
  return (
    <div className="flex-col md:flex overflow-y-auto bg-white h-full w-full">
    <main className="lg:pl-[28rem] bg-white">
      <div className="absolute leftside md:top-28 bg-white xl:pl-[30rem]">
      <div className='flex-col py-5 px-3 rounded-xl bg-gray-100'>
        <img src={thumbnail} className='w-[18rem] h-[11rem] rounded-lg'/>
        <div className="flex-col">
                 <div className="flex mt-3 justify-between">                
                <a href="/coursedetail"> <h1 className="font-semibold">Course Name</h1></a>
                <div className="bg-teal-500 text-white mt-2 px-1.5 rounded-lg">$80</div>
                </div>
                  <p className="flex text-xs -mt-1 text-gray-500">
                    Reviews (1K) - 5.0
                    <span>
                      <img src={star} alt="" className="ml-2" />
                    </span>
                  </p>
                  <div className="flex mt-3 gap-x-1">
                <img src={content} alt="w-2 h-2" />
                <p className="text-xs text-gray-500">110+ Content</p>
                <img src={divider} alt="" />
                <img src={clock} alt="" />
                <p className="text-xs text-gray-500">150 Hours</p>
                <a className="ml-8 hover:cursor-pointer text-xs">View Details</a>
              </div>
              <hr className='bg-gray-300 mx-2 mt-3'/>
              <div className='flex justify-between text-xs mt-2'>
                <p>Subtotal</p>
                <p>$80.00</p>
                </div>
                <div className='flex justify-between text-xs mt-2'>
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
          className="rounded-md mx-3 mt-4 medologybg px-16 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-teal-700 hover:border-teal-700 hover:border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
                  {/*email integration */}
<a href='/paymentconfirmation'>CONFIRM PAYMENT</a></button>
                </div>

      </div>
      </div>
    </main>
    <aside className="absolute bg-white top-20 left-[15rem] w-[100vw] md:w-[55%] py-2 px-2 md:px-8 ">
   <Payment/>
    </aside>
  </div>  )
}

export default PaymentCourse