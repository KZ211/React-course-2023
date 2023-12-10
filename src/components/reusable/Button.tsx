import React from 'react';

interface NameProps {
  name: string;
  interact: ()=>void;
  icon?: any 
}

const Button: React.FC<NameProps> = ({name , interact, icon}) => {
  return (
    <div>
      <button onClick={interact} type='button' className='my-1 btn btn-primary'>{icon} {name}</button>
    </div>
  );
};

export default Button;
