import React from 'react'
import './card.scss'

function Card(props) {
  return (
    <div className='generalCard'>
      {props.children}
    </div>
  )
}

export default Card
