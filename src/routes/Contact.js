import React from 'react'
import group from '../assests/Group 19.png'
function Contact() {
  return (
    <div>
           <div className='flex items-center justify-center mb-[12] bg-fixed bg-center bg-cover h-screen con'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'>

        </div>
        <div className='p-5 text-white z-[2]  text-center max-w-[950px] mx-auto'>
            <h1 className='font-medium md:text-5xl text-3xl md:leading-[55px] max-w-[850px]'>Your business will do more with great digital marketing. <span className='text-[#01AA63]'>Contact us</span> and let’s start working together today</h1>
            
            </div>
        </div>
        <div className='max-w-[1240px] py-8 mt-8 text-center px-8 mx-auto'>
            <div className='shadow-lg border border-zinc-100 max-w-[800px] h-[360px] flex items-center justify-center flex-col px-8 mx-auto rounded gap-y-4'>
              <img src={group} alt="/" className='w-[100px]'/>
              <h2 className='tracking-widest opacity-70  mt-2'>SEND US AN EMAIL</h2>
              <p className='text-sm'>Info@digimark.com</p>
            </div>
            
            </div>

            <div className='w-full px-8  py-14 mx-auto'>
                <h2 className='text-center text-2xl font-semibold'>Or Send us a direct message</h2>
            <form 
          className='w-full text-center max-w-[500px] mx-auto px-4 md:px-0 flex flex-col py-8'
          >
            <div className='md:flex gap-14'>
               <div className='flex flex-col gap-1'> 
               <label className='text-left text-sm'>Full name</label>
            <input    className='p-3 my-2 border rounded' type="text" placeholder='John Doe'/>
            </div>
            <div className='flex flex-col gap-1'>
            <label className='text-left text-sm'>Email</label>
         <input  className='p-3 my-2 border rounded' type="email" placeholder='Johndoe@xyz.com' autoComplete='current-password' />
         </div>
            </div>
            <div className='flex flex-col gap-1 py-4'>
            <label className='text-left text-sm'>What Service are you interested in?</label>
          <select className='border p-3 rounded'>
            <option value="" key="" className='py-8'>
             Contact marketing
            </option>
            <option value="" key="" className='py-8'>
        Social Media Marketing 
            </option>
            <option value="" key="" className='py-8'>
            Software Development
            </option>
            <option value="" key="" className='py-8'>
            Search Engine Marketing
            </option>
            </select>
            </div>
            <div className='flex flex-col gap-1 py-4'>

        
                <label className='text-left text-sm'>Additional Messages</label>
                <textarea className='border rounded' name="message" rows="5" ></textarea>
        </div>
        <button className='bg-[#01AA63] border py-3 my-6 rounded font-bold w-[150px] text-white mx-auto'>Send message</button>
          </form>
                </div> 
    </div>
  )
}

export default Contact