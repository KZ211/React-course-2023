import React from 'react';

interface Props{
  changeNameHandler : (event:any) => void;
}

const Input: React.FC<Props> = ({changeNameHandler}) => {
  return (
    <>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='basic-addon1'>*</span>
        <input onChange={changeNameHandler} type='text' className='form-control' placeholder='Username' aria-label='Username' aria-describedby='basic-addon1'/>
      </div>
    </>
  );
};

export default Input;
