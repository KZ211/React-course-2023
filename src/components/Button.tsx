import React from 'react';

interface NameProps {
  name: string;
}

const Button: React.FC<NameProps> = (props: any) => {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
};

export default Button;
