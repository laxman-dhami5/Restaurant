import { useContext } from 'react'
import CartContext from '../../../Storage/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
function MealItem(props) {
  const cartContext=useContext(CartContext)
    const price=`$${props.price.toFixed(2)}`

    const addToCartHandeler=(amount)=>{
   cartContext.addItems({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
   })
    }
  return (
    <li className={classes.meal}>
        <div><h3>{props.name}</h3></div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div><MealItemForm onAddCart={addToCartHandeler}/></div>
    </li>
  )
}

export default MealItem
