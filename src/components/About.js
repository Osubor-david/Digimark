import React from 'react'
import about from '../assests/Rectangle 3.png'
function About() {
  return (
    <div name='about' className='max-w-[1240px] mx-auto px-8 mt-[80px]'>
        <h3 className='text-center text-2xl'>
       About Us
        </h3>
      <hr className='w-20 h-[4px] mx-auto bg-[#01804B]'/>
      <div className='grid  md:grid-cols-2 px-8 md:px-4 lg:px-8 mt-5 gap-10'>
                 <img src={about} alt="/" className='w-[460px]'/>
                 <div className='text-md  '>
                    <p >Digimark is an SEO Company in Lagos, Nigeria. Our services include search engine optimization, content marketing, pay-per-click advertising, social media optimization, conversion rate optimization and wordpress web design.</p>

<p className='mt-10'>Focused on providing great service through excellent communication, we work with you and your internal team to ensure that your business excels. Instead of telling you what we do, how about we show you?</p>

<p className='mt-10'>Mission: To ensure that your business excels through the provision of superior SEO solutions.</p>

<p className='mt-10'>Vision: To be the best SEO Company in Lagos and Nigeria as a whole.</p>
<button className='my-6 px-2   rounded-md py-1   border border-[#01AA63] bg-[#01AA63] text-sm  text-white'>Contact Us</button>
                 </div>
      </div>
    </div>
  )
}

export default About