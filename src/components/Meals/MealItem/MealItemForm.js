import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const addSubmitHandeler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5) {
      setAmountIsValid(false)
      return;
    }
    props.onAddCart(enteredAmountNumber)
  }

  return (
    <form onSubmit={addSubmitHandeler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          ref: amountInputRef,
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid Amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm
