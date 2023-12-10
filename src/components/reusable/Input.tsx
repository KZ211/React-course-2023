import React from 'react';

interface Props{
  changeNameHandler : (event:any) => void;
  changeLastNameHandler : (event:any) => void;
}

const Input: React.FC<Props> = ({changeNameHandler, changeLastNameHandler}) => {
  return (
    <>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='basic-addon1'>Name</span>
        <input onChange={changeNameHandler} type='text' className='form-control' placeholder='Input your name' aria-label='Name' aria-describedby='basic-addon1'/>
      </div>
      <div className='input-group mb-3'>
        <span className='input-group-text' id='basic-addon1'>Last Name</span>
        <input onChange={changeLastNameHandler} type='text' className='form-control' placeholder='Input your Last Name' aria-label='Last Name' aria-describedby='basic-addon1'/>
      </div>
    </>
  );
};

export default Input;
