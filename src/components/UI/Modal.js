import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'
const BackDrop=(props)=>{
  return <div className={classes.backdrop}></div>
}
const ModalOverlay=(props)=>{
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalElement=document.getElementById('overlays')
function Modal(props) {
  return (
   <Fragment>
    {ReactDom.createPortal(<BackDrop/>,portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
   </Fragment>
  )
}

export default Modal
