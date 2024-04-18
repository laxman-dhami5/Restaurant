import React, { Fragment } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
function HeaderCartButton(props) {
  return (
    <Fragment>
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>4</span>
    </button>
    </Fragment>
  )
}

export default HeaderCartButton;
