import React, { Fragment } from 'react'
import classes from'./Header.module.css'
import mealsimage from'../../Assests/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
function Header() {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Pahadi Food</h1>
            <HeaderCartButton/>
        </header>
    <div className={classes['main-image']}>
      <img src={mealsimage} alt="Healthy and Delecious food" />
    </div>
    </Fragment>
  )
}

export default Header
