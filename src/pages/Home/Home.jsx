import React, { useState } from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Brand from '../../components/UI/Brand/Brand'
import './home.scss'
import MobileBrand from '../../components/UI/BrandMobile/MobileBrand'
import Rooms from '../../components/Rooms/Rooms'
import Forms from '../../components/Sidebar/Forms/Forms'
import MobileNav from '../../components/UI/MobileNav/MobileNav'

function Home() {
  const [bookNow, setBookNow] =useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  function handleBooking(){
    setBookNow(true)
  }
  function handleCloseBooking(){
    setBookNow(false)
  }
  function handleMobileNav(){
    setMobileNav(true)
  }
  function handleMobileClose(){
    setMobileNav(false)
  }
  return (
    <div>
    {mobileNav && <MobileNav onClose={handleMobileClose}/>}
    {bookNow && <Forms onClose ={handleCloseBooking}/>}
       <div className='homeContainer'>
        <Navbar OpenNav={handleMobileNav}/>
       </div>
       <div className='desktop'>
       <Brand />
       </div>
       <div className='mobile'>
        <MobileBrand />
       </div>
       <div>
        <Rooms onBook={handleBooking}/>
       </div>
    </div>
  )
}

export default Home