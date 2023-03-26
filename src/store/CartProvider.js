import React from 'react'
import cartContext from './cart-contenxts'

function CartProvider(props) {

    const CartContext ={
        items : [],
        totalAmount : 0,
        userName : '',
        addItem : () =>{},
        removeItem : ()=>{}
    }
  return (
    <cartContext.Provider value={CartContext}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider