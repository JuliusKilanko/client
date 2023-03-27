import React, { useContext, useState } from 'react'
import MobileNavModel from './MobileNavModel'
import './MobileNa.scss'
import {BsFillHouseDoorFill} from 'react-icons/bs'
import {MdContactSupport} from 'react-icons/md'
import {BiUserPin} from 'react-icons/bi'
import cartContext from '../../../store/cart-contenxts'

function MobileNav(props) {
  const ctx = useContext(cartContext)

  let contents = <p>Greetings</p>

  const Time = new Date().getHours()

  if(Time >= 6){
      contents = 'Good Morning 🌄'
  } 
  if(Time >= 12 ){
    contents = 'Good Afternon 🕑'
  }
  if(Time >= 16 ){
    contents = 'Good Evening 🌆'
  }
  if(Time >= 18 ){
    contents ='Good Night 🌃'
  }
  return (
    <MobileNavModel onClose={props.onClose}>
      <div className='generalMobileNav'>
      <ul className='mobileNavLink'>
      <div className='userName'>
        <h1>Hey {ctx.userName}</h1>
        <span>{contents}</span>
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
