import React from 'react'
import Service from '../components/Service'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Case from '../components/Case'
import Testimonies from '../components/Testimonies'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <Hero/>
        <Service/>
        <About/>
        <Case/>
        <Testimonies/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home