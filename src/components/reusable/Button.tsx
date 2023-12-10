import React from 'react';

interface NameProps {
  name: string;
}

const Button: React.FC<NameProps> = (props: any) => {
  return (
    <div>
      <button type='button' className='my-1 btn btn-primary'>{props.name}</button>
    </div>
  );
};

export default Button;
