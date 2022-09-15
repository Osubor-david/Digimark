import React from 'react'
import fir from '../assests/image 1.png'
import sec from '../assests/image 2.png'
import secs from '../assests/image 3.png'
import se from '../assests/image 4.png'
function Case() {
  return (
<div name='case' className='max-w-[1140px] mx-auto px-8 mt-[80px]'>
    
    <h3 className='text-center text-2xl'>
     Case Studies
      </h3>
      <hr className='w-20 h-[4px] mx-auto  bg-[#01804B]'/>
      <div className='grid px-8 md:grid-cols-2  mt-7 gap-6 lg:gap-x-0'>
          <img src={fir} alt="/"  className='w-[450px]'/>
          <img src={sec} alt="/"  className='w-[450px]'/>
          <img src={secs} alt="/"  className='w-[450px]'/>
          <img src={se} alt="/"  className='w-[450px]'/>
      </div>
      <h2 className='max-w-[700px] mt-16 md:text-3xl text-lg mx-auto text-center'>Your business will do better with great digital marketing. Start your growth journey with us today.</h2>
      <button className='my-6 px-5 block  mx-auto  rounded-md py-1.5   border border-[#01AA63] bg-[#01AA63] text-sm  text-white'>Contact Us</button>
                 </div>
    
  )
}

export default Case