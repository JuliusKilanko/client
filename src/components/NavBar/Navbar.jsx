import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiMenu5Fill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'
import './navbar.scss'
import './navbarMedia.scss'
import Logo from '../../assets/myLogo.png'

function Navbar(props) {
  return (
    <React.Fragment>
    <div className='navbar'>
      <div className='logo'>
      <img src={Logo} alt='Logo'/>
      </div>
      <ul className='navLink'>
        <li>Anywhere</li>
        <li>AnyWeek</li>
        <li>Add Guest</li>
      </ul>
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