import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../Storage/cart-context'
import CartItem from './CartItem'

function Cart(props) {
  const cartContext = useContext(CartContext)
  const totalAmount=`$${cartContext.totalAmount.toFixed(2)}`
  const hasItems=cartContext.length>0

  const removeItemHandeler=(id)=>{
    cartContext.removeItems(id)
  }
  const addItemHandeler=(item)=>{
    cartContext.addItems({...item,amount:1})
  }
  
  const cartItems = cartContext.items.map((item) => (
    <CartItem
    key={item.id}
    name={item.name} 
    amount={item.amount} 
    price={item.price} 
    onRemove={removeItemHandeler.bind(null,item.id)} 
    onAdd={addItemHandeler.bind(null,item)}/>
  ))

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems&&<button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
