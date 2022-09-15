import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <div className='w-full bg-[#015532] text-sm font-thin text-white mt-[80px]'>
      <div className='border-b border-white/40'>  
   <div className='grid  md:grid-cols-2 px-8 max-w-[1240px] mx-auto py-7'>
    <div>
    <div  className='digi mt-8 text-4xl text-white'>
           <Link to='/'>
           Digimark
           </Link> 
        </div>
  <div className='flex  mt-5 gap-4'>
    
    <FaFacebookF className='' size={20} />
    <AiOutlineTwitter className='' size={20}/>
    <AiFillLinkedin className='' size={20}/>
    <BsInstagram className='' size={20}/>
  </div>
  </div>
    <div>
        <h3 className='text-xl mt-12 md:mt-0'>STAY INFORMED</h3>
        <p className='py-4'>Subscribe to our newsletter to receive industry news, updates and best practices in the world of technology and digital marketing.</p>
        <div className='flex gap-2 '>
            <input type="text"  className='rounded-md'/>
            <button className='bg-[#01AA63] rounded-md border border-[#01AA63] px-2 py-1'>Contact Us</button>
        </div>
    </div>
   </div>
   </div>
   <div className='border-b border-white/40'>
       <div className='grid grid-cols-2 md:grid-cols-4 px-8 max-w-[1240px] mx-auto py-8'>
        <div>
           <h2 className='text-xl'>
            contact
           </h2>
           <ul className='my-3 opacity-70'>
            <li>
           hello@digimark.com.ng
         </li>
         <li>
         74, Wendel street,<br/> 
         Lekki, Lagos.
         </li>
         <li>
         +234 809 967 9230
         </li>
           </ul>
        </div>
        <div>
        <h2 className='text-xl'>
               Helpful Links
           </h2>
           <ul className='my-3 opacity-70 cursor-pointer'>
            <li>
            About
         </li>
         <li>
         Our Products
         </li>
         <li>
         Our Service
         </li>
         <li>
         Case Studies
         </li>
           </ul>

        </div>
        <div>
        <h2 className='text-xl'>
            Services
           </h2>
           <ul className='my-3 opacity-70'>
            <li>
            Social Media Marketing

         </li>
         <li>
         Software Development

         </li>
         <li>
         Web Design & <br/> 
         Development

         </li>
         <li>
         Search Engine Marketing
         </li>
           </ul>

        </div>
        
        
        <div>
        <h2 className='text-xl'>
        Products
           </h2>
           <ul className='my-3 opacity-70'>
            <li>
           
Google Cloud
         </li>
         <li>
         Biometric Identity
         </li>
         <li>
         Management

         </li>
         <li>
         
Cyber Security
         </li>
         <li>
         HR Management
         </li>
           </ul>

        </div>
       </div>
   </div>
   <h2 className='py-4 text-center'>Digimark Communications © 2022. All Rights Reserved.</h2>
    </div>
  )
}

export default Footer