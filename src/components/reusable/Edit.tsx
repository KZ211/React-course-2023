import React,{useState} from 'react';

import EditLogo from '../../assets/edit.svg'

const Button: React.FC = () => {
    let activated = false;
    const [enteredModal, setModal] = useState(activated);

    function changeModalHandler(){
        enteredModal === true ? setModal(false): setModal(true); 
        console.log(enteredModal);
    }

    return (
    <div>
      <a href="#" onClick={changeModalHandler}><img src={EditLogo} alt="Edit" height='50px'/></a>
    </div>
  );
};

export default Button;
