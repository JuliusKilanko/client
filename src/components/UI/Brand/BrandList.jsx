import React from 'react'
import './brandlist.scss'

function BrandList(props) {
  return (
      <ul className='ul'>
    <li>{props.text}</li>
    <img src={props.icon} alt=""/>
    </ul>
  )
}

export default BrandList
