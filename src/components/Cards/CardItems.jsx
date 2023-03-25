import React from 'react'
import './CardItems.scss'

function CardItems(props) {
    const price = `£${props.price.toFixed(2)}`;
  return (
    <div className='Card'>
        <img src={props.img} alt={props.name} />
        <div className='topDiv'>
            <h2>{props.name}</h2>
            <div>
                <span>{price}</span>
                <span> x {'1'}</span>
            </div>
            <div className='button'>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    </div>
  )
}

export default CardItems