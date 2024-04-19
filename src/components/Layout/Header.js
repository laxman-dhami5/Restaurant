import React, { Fragment } from 'react'
import classes from'./Header.module.css'
import mealsimage from'../../Assests/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Pahadi Food</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
            
        </header>
    <div className={classes['main-image']}>
      <img src={mealsimage} alt="Healthy and Delecious food"  />
    </div>
    
    </Fragment>
  )
}

export default Header
