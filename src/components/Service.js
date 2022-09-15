import React from 'react'

function About() {
  return (
    <div className='max-w-[1240px] mx-auto px-8 my-10'>
    
      <h3 className='text-center text-2xl'>
       Our  Service
        </h3>
      <hr className='w-20 h-[4px] mx-auto bg-[#01804B]'/>
      <div className='grid md:grid-cols-3    gap-8 md:gap-5   mt-7'>
       <div className='bg-white shadow-md rounded-md mx-auto max-w-[310px]'>
        <h1 className='text-center font-semibold mt-6'>Search Engine <br/> Optimization</h1>
        <p className='  px-4 text-center mt-4 text-sm'>
Search engines are unique in that they provide targeted traffic people looking for what you offer.</p>
       
       <button className='my-6 px-2  hover:bg-[#01804B] hover:text-white block rounded-md py-1  mx-auto text-[#01804B]  border border-[#01804B]'>Read More</button>
       </div>
       <div className='bg-white shadow-md rounded-md mx-auto max-w-[310px]'>
        <h1 className='text-center font-semibold mt-6'>Content Marketing</h1>
        <p className='  px-6 text-center mt-4 text-sm'>

        Successful content marketing is communicating the right message at the right time to the right audience. </p>
       
       <button className='my-6 px-2  block rounded-md py-1 hover:bg-[#01804B] hover:text-white mx-auto text-[#01804B]  border border-[#01804B]'>Read More</button>
       </div>
       <div className='bg-white shadow-md rounded-md mx-auto max-w-[310px]'>
        <h1 className='text-center font-semibold mt-6'>Pay-Per-Click  <br/> Advertising</h1>
        <p className='  px-4 text-center mt-4 text-sm'>
        Through our pay-per-click advertising service, we promote your website by increasing its visibility on Google search engine.</p>
       
       <button className='my-6 px-2  block rounded-md py-1 hover:bg-[#01804B] hover:text-white mx-auto text-[#01804B]  border border-[#01804B]'>Read More</button>
       </div>
       <div className='bg-white shadow-md rounded-md mx-auto max-w-[310px]'>
        <h1 className='text-center font-semibold mt-6'>Social Media  <br/> Optimization</h1>
        <p className='  px-4 text-center mt-4 text-sm'>
Search engines are unique in that they provide targeted traffic people looking for what you offer.</p>
       
       <button className='my-6 px-2  block rounded-md py-1 hover:bg-[#01804B] hover:text-white mx-auto text-[#01804B]  border border-[#01804B]'>Read More</button>
       </div>
       <div className='bg-white shadow-md rounded-md mx-auto max-w-[310px]'>
        <h1 className='text-center font-semibold mt-6'>Wordpress Web Design</h1>
        <p className='  px-6 text-center mt-4 text-sm'>
        Successful content marketing is communicating the right message at the right time to the right audience. </p>
       
       <button className='my-6 px-2  block rounded-md py-1 hover:bg-[#01804B] hover:text-white  mx-auto text-[#01804B]  border border-[#01804B]'>Read More</button>
       </div>
       <div className='bg-white shadow-md rounded-md mx-auto max-w-[310px]'>
        <h1 className='text-center font-semibold mt-4'>Conversion Rate  <br/> Optimization</h1>
        <p className='  px-4 text-center mt-4 text-sm'>
        Through our pay-per-click advertising service, we promote your website by increasing its visibility on Google search engine.</p>
       
       <button className='my-6 px-2  block rounded-md py-1 hover:bg-[#01804B] hover:text-white mx-auto text-[#01804B]  border border-[#01804B]'>Read More</button>
       </div>
      </div>

      </div>
  )
}

export default About