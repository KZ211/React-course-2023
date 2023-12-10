import React from "react"

import classes from './Modal.module.css'

interface Props{
    children: React.ReactNode,
    activated: boolean,
    closeModalHandler: () => void
  }

const Modal: React.FC<Props> = ({children, activated, closeModalHandler}) => {
  return (
  <>
    <div className={classes.backdrop} onClick={closeModalHandler}/>
    <dialog className={classes.modal} tabIndex={1} open={activated} > {children} </dialog>
  </>
  );
};

export default Modal;
