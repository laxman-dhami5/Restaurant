import React, { Fragment, useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Storage/cart-context'
function HeaderCartButton(props) {
 const cartChook= useContext(CartContext)
 const nOfCartItems=cartChook.items.reduce((currentNum,item)=>{
  return currentNum+item.amount
 },0)
  return (
    <Fragment>
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{nOfCartItems}</span>
    </button>
    </Fragment>
  )
}

export default HeaderCartButton;
