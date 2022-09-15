import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import digi from '../assests/Digimark.png'
function Navbar() {
   const [nav,setNav] = useState(false)
   const [color,setColor] = useState('transparent')
   const [textColor,setTextColor] = useState('white')
  const handleClick = () =>{
   setNav(!nav)
  }
  useEffect(() => {
   const changeColor = () =>{
      if (window.scrollY >= 90) {
         setColor('#ffffff')
         setTextColor('#000000')
      }else{
         setColor('transparent')
         setTextColor('#ffffff')
      }
   }
   window.addEventListener('scroll', changeColor)
  }, [])
  const activeLink ='w-2 mt-4   border-b-2 border-[#01AA63]'
  const normal = ''
   return (
    <div style={{backgroundColor:`${color}`}} className='top-0 fixed left-0 w-full z-20 ease-in duration-300 '>
        <div className='max-w-[1240px] mx-auto flex justify-between items-center p-4 px-8'>
           <div  className='digis cursor-pointer text-4xl'>
           <NavLink to='/'>
           Digimark
           </NavLink> 
        </div>
           <ul style={{color: `${textColor}`}} className='md:flex hidden text-white justify-center cursor-pointer items-center'>
            <li className='pr-[18.18px] p-3'><NavLink to='/'className={({isActive})=> isActive ? activeLink : normal}>Home</NavLink></li>
            <li className='pr-[18.18px] p-3'>
            <Link to='about'smooth={true} duration={500}>About</Link>
            </li>
            <li className='pr-[18.18px] p-3'>
            <NavLink to='/service'         
            className={({isActive})=> isActive ? activeLink : normal}> Service</NavLink></li>
         
            <li className='pr-[18.18px] p-3'>
            <Link to='case'smooth={true} duration={500}>Case Study</Link> 
               </li>
            <li className='pr-[18.18px] p-3'>News</li>
            <li className='pr-[18.18px] p-3'>FAQS</li>
            <NavLink to='/contact'><li style={{color: `white`}} className='ml-[18.18px] px-3 py-1.5 cursor-pointer rounded-md text-sm bg-green-500 border border-green-500'>Contact Us</li>
            </NavLink>
           </ul>
           {/* toggle */}
           <div onClick={handleClick} className="mr-2 text-gray-300 block sm:hidden cursor-pointer z-30">
            {
            nav ?  <AiOutlineClose className='text-black' size={25}  /> : <AiOutlineMenu style={{color: `${textColor}`}} className='text-white mt-1' size={25}/> }
        </div>
           {/* mobile menu */}
           <div className= {nav ? 'sm:hidden absolute top-0 left-0  flex flex-col w-full items-center justify-between h-screen bg-zinc-200 text-black ease-in duration-300' :
             'sm:hidden  absolute left-[-100%] top-0  flex flex-col items-center justify-between text-black w-full h-screen bg-zinc-200 ease-in duration-300 z-10'}>
           <ul className='  text-black w-full mt-14 p-6 cursor-pointer'>
            <li className='pr-[18.18px] p-5 border-b-2 border-zinc-300'><NavLink 
            onClick={handleClick} to='/'>Home</NavLink></li>
            <li className='pr-[18.18px] p-5 border-b-2 border-zinc-300'>
            <Link onClick={handleClick} to='about'smooth={true} duration={500}>About
            </Link> 
               
               </li>
            <li className='pr-[18.18px] p-5 border-b-2 border-zinc-300'>
            <NavLink 
            onClick={handleClick} to='/service'>Service</NavLink>
            </li>
            <li className='pr-[18.18px] p-5 border-b-2 border-zinc-300'>
            <Link onClick={handleClick} 
             to='case'smooth={true} duration={500}>Case Study</Link> 
               </li>
            <li className='pr-[18.18px] p-5 border-b-2 border-zinc-300'>News</li>
            <li className='pr-[18.18px] p-5  border-b-2 border-zinc-300'>FAQS</li>
            <NavLink to='/contact' onClick={handleClick}><li className='ml-[18.18px] px-3 py-3 mt-10 text-center cursor-pointer rounded-md text-sm bg-green-500 border border-green-500 text-white'>Contact Us</li>
           </NavLink>
           </ul>
           </div>
        </div>
        </div>
  )
}

export default Navbar