import React from 'react';

import EditLogo from '../../assets/edit.svg'

interface ModalChange{
  modalState: () => void;
}

const Button: React.FC<ModalChange> = ({modalState}) => {

    return (
    <div>
      <button onClick={modalState} ><img src={EditLogo} alt="Edit" height='50px'/></button>
    </div>
  );
};

export default Button;
