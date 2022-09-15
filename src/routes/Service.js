import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assests/glass.png'
import img1 from '../assests/img1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'
import img4 from '../assests/img4.png'
import img5 from '../assests/img5.png'
function Service() {
  return (
    <div>
        <div className='flex items-center justify-center mb-[12] bg-fixed bg-center bg-cover h-screen con'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]'>

        </div>
        <div className='p-5 text-white z-[2]  text-center max-w-[800px] mx-auto'>
            <h1 className='font-medium md:text-5xl text-3xl md:leading-[55px] max-w-[800px]'>
               Our Services
               
            </h1>
            <p className='font-sm md:text-3xl text-xl '>(What we do)</p>
            
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto my-10 px-8'>
             <div className='grid md:grid-cols-2 my-[100px]'>
                <div>
                    <h2 className='font-semibold'>Search Engine Optimization</h2>
                  <p className='mt-8 max-w-[500px]'>
Search engines are unique in that they provide targeted traffic – people looking for what you offer. At Crank Digital, our SEO service encompasses both technical and creative elements required to improve rankings, drive traffic and increase website’s popularity on search engines such as Google, Bing and Yahoo! Our SEO experts plan and execute search engine solutions for firms of all sizes.
As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a website will receive more visitors from a search engine when websites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p> 
             </div>
             <div>
                <img src={img} alt="/" />
             </div>
             </div>
             <div className='flex flex-wrap md:flex-nowrap justify-between flex-col-reverse sm:flex-row gap-4  my-[100px]'>
             <div className=''>
                <img src={img1} alt="/"  className='md:mt-12 lg:mt-0 '/>
             </div>
                <div className=''>
                    <h2 className='font-semibold'>Content Marketing</h2>
                  <p className='mt-8 max-w-[500px]'>
Search engines are unique in that they provide targeted traffic – people looking for what you offer. At Crank Digital, our SEO service encompasses both technical and creative elements required to improve rankings, drive traffic and increase website’s popularity on search engines such as Google, Bing and Yahoo! Our SEO experts plan and execute search engine solutions for firms of all sizes.
As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a website will receive more visitors from a search engine when websites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p> 
             </div>

             </div>
             <div className='grid md:grid-cols-2 my-[100px]'>
                <div>
                    <h2 className='font-semibold'>Pay-Per-Click Advertising
</h2>
                  <p className='mt-8 max-w-[500px]'>
Search engines are unique in that they provide targeted traffic – people looking for what you offer. At Crank Digital, our SEO service encompasses both technical and creative elements required to improve rankings, drive traffic and increase website’s popularity on search engines such as Google, Bing and Yahoo! Our SEO experts plan and execute search engine solutions for firms of all sizes.
As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a website will receive more visitors from a search engine when websites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p> 
             </div>
             
                <img src={img2} alt="/"  />
    
             </div>
             <div className='flex flex-wrap md:flex-nowrap justify-between flex-col-reverse sm:flex-row gap-4  my-[100px]'>
             <img src={img3} alt="/"  />
                <div>
                    <h2 className='font-semibold'>Search Media Optimization</h2>
                  <p className='mt-8 max-w-[500px]'>
Search engines are unique in that they provide targeted traffic – people looking for what you offer. At Crank Digital, our SEO service encompasses both technical and creative elements required to improve rankings, drive traffic and increase website’s popularity on search engines such as Google, Bing and Yahoo! Our SEO experts plan and execute search engine solutions for firms of all sizes.
As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a website will receive more visitors from a search engine when websites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p> 
             </div>
             

    
             </div>
             <div className='grid md:grid-cols-2 my-[100px]'>
                <div>
                    <h2 className='font-semibold'>Wordpress Web Design
</h2>
                  <p className='mt-8 max-w-[500px]'>
Search engines are unique in that they provide targeted traffic – people looking for what you offer. At Crank Digital, our SEO service encompasses both technical and creative elements required to improve rankings, drive traffic and increase website’s popularity on search engines such as Google, Bing and Yahoo! Our SEO experts plan and execute search engine solutions for firms of all sizes.
As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a website will receive more visitors from a search engine when websites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p> 
             </div>
             
                <img src={img4} alt="/"  />
    
             </div>
             <div className='flex flex-wrap md:flex-nowrap justify-between flex-col-reverse sm:flex-row gap-4  my-[100px]'>
             <img src={img5} alt="/"  />
    
                <div>
                    <h2 className='font-semibold'>Conversion Rate Optimization</h2>
                  <p className='mt-8 max-w-[500px]'>
Search engines are unique in that they provide targeted traffic – people looking for what you offer. At Crank Digital, our SEO service encompasses both technical and creative elements required to improve rankings, drive traffic and increase website’s popularity on search engines such as Google, Bing and Yahoo! Our SEO experts plan and execute search engine solutions for firms of all sizes.
As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior, what people search for, the actual search terms or keywords typed into search engines, and which search engines are preferred by their targeted audience. SEO is performed because a website will receive more visitors from a search engine when websites rank higher on the search engine results page (SERP). These visitors can then potentially be converted into customers.</p> 
             </div>
             
               
             </div>
             <h2 className='max-w-[700px] mt-16 md:text-3xl text-lg mx-auto text-center'>Your business will do better with great digital marketing. Start your growth journey with us today.</h2>
     <Link to='/contact'> <button className='my-6 px-5 block  mx-auto  rounded-md py-1.5   border border-[#01AA63] bg-[#01AA63] text-sm  text-white'>Contact Us</button>
     </Link>
         </div>
    </div>
  )
}

export default Service