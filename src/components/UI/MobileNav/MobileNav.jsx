import React from 'react'
import MobileNavModel from './MobileNavModel'
import './MobileNa.scss'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {MdContactSupport} from 'react-icons/md'
import {BiUserPin} from 'react-icons/bi'

function MobileNav(props) {
  return (
    <MobileNavModel onClose={props.onClose}>
      <div className='generalMobileNav'>
      <ul className='mobileNavLink'>
      <div className='userName'>
        <h1>Hey iWealth</h1>
        <span>Welcome Back</span>
      </div>
        <li>AnyWhere</li>
        <li>AnyWeek</li>
        <li>Add Guest</li>
        <li>bnb your House</li>
        <li>Experience</li>
        <li>Help</li>
        <li>Login</li>
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
