import React from 'react'
import './RoomsItem.scss'

function RoomItem(props) {

    const price =`£${props.price}`

  return <li className='RoomsItem'>
    <div className='items'>
        <img src={props.img} alt={props.name}/>
        <p>{props.name}</p>
        <span>{props.address}</span>
        <span>{price} <button className='bookbtn' onClick={props.onBook}>Book</button></span>
    </div>
  </li>
}

export default RoomItem