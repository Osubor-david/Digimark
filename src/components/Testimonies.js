import React from 'react'
import man from '../assests/man.jpg'
import {HiOutlineArrowRight} from 'react-icons/hi'
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import SwiperCore, {Navigation, Pagination ,   Scrollbar, A11y, Autoplay} from 'swiper';
SwiperCore.use((Navigation, Pagination ,[Autoplay], Scrollbar, A11y))

function Testimonies() {

    return (
    <div className='max-w-[1240px] mx-auto md:px-8 mt-[80px]'>
    
    <h3 className='text-center text-2xl'>
     Testimonies
      </h3>
    <hr className='w-20 h-[4px] mx-auto bg-[#01AA63]'/>
    
    <div className='bg-[#01AA630D] mx-auto   my-[60px]'>
        
        <Swiper
            className=''
        modules={[Navigation,Autoplay, Pagination, A11y]}
        spaceBetween={0}
        navigation
        
        pagination={{clickable:true}}
        // scrollbar={{draggable: true}}
        autoplay={{
            delay: 3000,
            diasableOnInteraction:false
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)} 
           breakpoints={{
            640:{
                width:640,
                slidesPerView:1,
            },
            768:{
                width:768,
                slidesPerView:2,
            },
            1200:{
                width:1200,
                slidesPerView:2,
            },
           }}
    style={{
        '--swiper-navigation-color': '#01AA63',
        '--swiper-pagination-color': '#01AA63'
    }}
>
        

       
       <SwiperSlide className='py-4'> 
        <div className=' shadow-lg md:mx-8 md:ml-10  xl:mx-auto mx-10 max-w-[500px]  bg-white rounded-md'>
            <div className='flex px-4 justify-evenly py-4 my-6 gap-4 md:gap-4 lg:gap-0'>
           <img src={man} className='rounded-full w-[70px] h-[70px]' alt="/" />
          <div className    ='mt-2 text-sm'> 
           <h5 className='text-sm'>Mr. Chike Onyia, Esq.
            </h5>
            <h5 className='text-sm'>
            Managing Director, Zolts Limited</h5>
        </div>
        </div>
        <p className='max-w-[400px] py-2 text-sm   mx-auto my-5 px-3'>I have come across several digital marketing agencies, but Socialander has proven beyond mere clock-punching to be the best in my experience. I recommend you go for Socialander if you want your brand to become the next big thing in the digital world.
</p>
        </div>
        
        </SwiperSlide>
        <SwiperSlide className='py-4'> 
            <div className='shadow-lg mx-auto md:ml-10  mx-10 max-w-[500px] md:mx-8  bg-white rounded-md'>
            <div className='flex px-4 py-4 justify-evenly  my-6 gap-4 md:gap-4 lg:gap-0'>
           <img src={man} className='rounded-full w-[70px] h-[70px]' alt="/" />
          <div className='mt-2'> 
           <h5 className='text-sm'>Mr. Chike Onyia, Esq.
            </h5>
            <h5 className='text-sm'>
Managing Director, Zolts Limited</h5>
        </div>
        </div>
        <p className='max-w-[400px] py-2 text-sm mx-auto my-5 px-3'>I have come across several digital marketing agencies, but Socialander has proven beyond mere clock-punching to be the best in my experience. I recommend you go for Socialander if you want your brand to become the next big thing in the digital world.
</p>
        </div>
        
        </SwiperSlide>
        <SwiperSlide className='py-4'> 
        <div className=' shadow-lg md:mx-8 mx-10 md:ml-10 mx-auto max-w-[500px]  bg-white rounded-md'>
            <div className='flex px-4 justify-evenly py-4 my-6 gap-4 md:gap-4 lg:gap-0'>
           <img src={man} className='rounded-full w-[70px] h-[70px]' alt="/" />
          <div className    ='mt-2'> 
           <h5 className='text-sm'>Mr. Chike Onyia, Esq.
            </h5>
            <h5 className='text-sm'>
Managing Director, Zolts Limited</h5>
        </div>
        </div>
        <p className='max-w-[400px] py-2 text-sm   mx-auto my-5 px-3'>I have come across several digital marketing agencies, but Socialander has proven beyond mere clock-punching to be the best in my experience. I recommend you go for Socialander if you want your brand to become the next big thing in the digital world.
</p>
        </div>
        
        </SwiperSlide>
        <SwiperSlide className='py-4'> 
            <div className='shadow-lg mx-auto max-w-[500px] md:mx-8 mx-10  bg-white rounded-md'>
            <div className='flex px-4 py-4 justify-evenly  my-6 gap-4 md:gap-4 lg:gap-0'>
           <img src={man} className='rounded-full w-[70px] h-[70px]' alt="/" />
          <div className='mt-2'> 
           <h5 className='text-sm'>Mr. Chike Onyia, Esq.
            </h5>
            <h5 className='text-sm'>
Managing Director, Zolts Limited</h5>
        </div>
        </div>
        <p className='max-w-[400px] py-2 text-sm mx-auto my-5 px-3'>I have come across several digital marketing agencies, but Socialander has proven beyond mere clock-punching to be the best in my experience. I recommend you go for Socialander if you want your brand to become the next big thing in the digital world.
</p>
        </div>
        
        </SwiperSlide>

        </Swiper>
    </div>
    </div>
    
  )
}

export default Testimonies