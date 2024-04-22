import React from 'react'
import CartContext from './CartContext'
const CartProvider=(props)=> {
   const addCartHandeler=()=>{}
   const removeCartHandeler=()=>{}

   const cartContext={
    items:[],
    totalAmount:0,
    addItems:addCartHandeler,
    removeItems:removeCartHandeler
   }
  return (
    <CartContext.Provider value={cartContext}>
       {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
