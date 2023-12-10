import React from "react"

import classes from './Modal.module.css'

interface Props{
    children: React.ReactNode;
    activated: boolean;
  }

const Modal: React.FC<Props> = ({children, activated}) => {
  return (
  <>
    <dialog className={classes.modal} tabIndex={1} open={activated} > {children} </dialog>
  </>
  );
};

export default Modal;
