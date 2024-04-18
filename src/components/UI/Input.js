import React from "react";
import classes from './Input.module.css'

function Input(props) {
  return (
    <div className={classes.Input}>
        <labell htmlFor={props.input.id}>{props.label}</labell>
       <input {...props.input}></input>
    </div>
  )
}

export default Input
