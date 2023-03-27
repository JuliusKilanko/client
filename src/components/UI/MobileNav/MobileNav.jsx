import React, { useContext } from 'react'
import MobileNavModel from './MobileNavModel'
import './MobileNa.scss'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {MdContactSupport} from 'react-icons/md'
import {BiUserPin} from 'react-icons/bi'
import cartContext from '../../../store/cart-contenxts'

function MobileNav(props) {
  const ctx = useContext(cartContext)
  return (
    <MobileNavModel onClose={props.onClose}>
      <div className='generalMobileNav'>
      <ul className='mobileNavLink'>
      <div className='userName'>
        <h1>Hey {ctx.userName}</h1>
        <span>Welcome Back</span>
      </div>
        <li>AnyWhere</li>
        <li>AnyWeek</li>
        <li>Add Guest</li>
        <li>BNB your House</li>
        <li>Experience</li>
        <li>Help</li>
        <li onClick={props.onLoggedOut}>Logout</li>
      </ul>
      <ul className='user'>
        <li><BsFillHouseDoorFill /></li>
        <li><MdContactSupport /></li>
        <li><BiUserPin /></li>
      </ul>
      </div>
    </MobileNavModel>
  )
}

export default MobileNav
