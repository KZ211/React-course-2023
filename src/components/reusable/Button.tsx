import React from 'react';

interface NameProps {
  name: string;
  interact: ()=>void;
}

const Button: React.FC<NameProps> = ({name , interact}) => {
  return (
    <div>
      <button onClick={interact} type='button' className='my-1 btn btn-primary'>{name}</button>
    </div>
  );
};

export default Button;
