import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
function Cart(props) {
    const cartItems=<ul className={classes['cart-items']}>{[{id:'x1',name:'Tea',amount:1,price:2}].map((item)=>{
        return <li>{item.name}</li>
    })}</ul>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>$ 3.2</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
