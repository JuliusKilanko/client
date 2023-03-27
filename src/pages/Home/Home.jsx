import React, { useState } from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Brand from '../../components/UI/Brand/Brand'
import './home.scss'
import MobileBrand from '../../components/UI/BrandMobile/MobileBrand'
import Rooms from '../../components/Rooms/Rooms'
import Forms from '../../components/Sidebar/Forms/Forms'
import MobileNav from '../../components/UI/MobileNav/MobileNav'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Cards/Card'

function Home(props) {
  const [bookNow, setBookNow] =useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [cart, setCart] = useState(false)

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
  function handleCart(){
    setCart(true)
    
  }
  function handleCloseCart(){
    setCart(false)
  }

  return (
    <div>
      {cart && <Card onClose={handleCloseCart}/>}
    {mobileNav && <MobileNav onClose={handleMobileClose} onLoggedOut={props.onLoggedOut}/>}
    {bookNow && <Forms onClose ={handleCloseBooking}/>}
       <div className='homeContainer'>        <Navbar OpenNav={handleMobileNav} openCart={handleCart}/>
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
       <div>
        <Footer />
       </div>
    </div>
  )
}

export default Home