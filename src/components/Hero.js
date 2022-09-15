import React from 'react'
import  {AiOutlineArrowRight} from 'react-icons/ai'
import Navbar from './Navbar'
  function Hero() {
  return (
    <div className='flex items-center justify-center mb-[12] bg-fixed bg-center bg-cover h-screen img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'>

        </div>
        <div className='p-5 text-white z-[2]  text-center max-w-[800px] mx-auto'>
            <h1 className='font-medium md:text-5xl text-3xl md:leading-[55px] max-w-[800px]'>Growing business around with culturally relevant world class solutions</h1>
            <button className='flex items-center justify-center  px-3 py-1 bg-[#01AA63] border border-[#01AA63] shadow rounded-md mt-[17px]  gap-3 mx-auto'>
                <small className=' opacity-70'>Read more about Us</small>
                <AiOutlineArrowRight/>
                </button>
            
            </div>
        </div>

  )
}

export default Hero