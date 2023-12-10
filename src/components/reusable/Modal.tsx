import React from "react"

import classes from './Modal.module.css'

interface Props{
    children: React.ReactNode;
  }

const Modal: React.FC<Props> = ({children}) => {
  return (
  <>
    <dialog className={classes.backdrop} tabIndex={1} open > {children} </dialog>
  </>
  );
};

export default Modal;
