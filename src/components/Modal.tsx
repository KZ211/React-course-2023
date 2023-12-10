import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

const Modal: React.FC<Props> = ({children}) => {
  return (
   

<div className="modal fade">
    <dialog open > {children} </dialog>
</div>
  );
};

export default Modal;
