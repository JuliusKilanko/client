import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiMenu5Fill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'
import './navbar.scss'
import './navbarMedia.scss'
import Logo from '../../assets/myLogo.png'
import {RiShoppingBasketLine} from 'react-icons/ri'
import {MdOutlineLocationSearching} from 'react-icons/md'

function Navbar(props) {
  const items = 10
  return (
    <React.Fragment>
    <div className='navbar'>
      <div className='logo'>
      <img src={Logo} alt='Logo'/>
      </div>
      <ul className='navLink'>
        <li>Anywhere</li>
        <li>AnyWeek</li>
        <li className='guess'>Add Guest <MdOutlineLocationSearching className='icon'/></li>
      </ul>
      <div className='item'>
      <RiShoppingBasketLine  size={40}/>
      <span>{items}</span>
      </div>
      <div className='hamburger'>
      <GiHamburgerMenu size={30} onClick={props.OpenNav}/>
      </div>
      <div className='user'>
      <RiMenu5Fill size={20}/>
      <FaUserAlt />
      </div>
    </div>
    </React.Fragment>
  )
}

export default Navbar