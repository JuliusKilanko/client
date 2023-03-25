import React from 'react'
import CardItems from './CardItems'
import Model from '../UI/Models/Model'
import Build from '../../assets/cap-estate.webp'
import App from '../../assets/cul-de-sac.webp'
import './Card.scss'


const contents = [
    {
        name : 'Buidling',
        contents : '7 days available',
        price : 1290,
        img : Build
    },
    {
        name : 'Buidling',
        contents : '7 days available',
        price : 1290,
        img : App
    },
]

function Card(props) {
    const price =1340
    const totalPrice = `£${price.toFixed(2)}`;
    const cartItems = <ul className='container'>{contents.map((item) =>(
        <CardItems 
        
        name ={item.name}
        img ={item.img}
        contents={item.contents}
        price={item.price}/>
    ))}</ul>
  return (
   <Model>
    <div className='cartModel'>
    {cartItems}
        <div className='GeneralCartDiv'>
            <div className='totalAmount'>
            <span>Total Amount</span>
            <span className='amount'>{totalPrice}</span>
            </div>
            <div className='cartButton'>
                <button>ORDER</button>
                <button onClick={props.onClose}>CLOSE</button>
            </div>
        </div>
    </div>
   </Model>
  )
}

export default Card