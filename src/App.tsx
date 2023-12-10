import React from 'react'

import './App.css'
import Modal from './components/reusable/Modal'
import Card from './components/reusable/Card'
import Edit from './components/reusable/Edit'
import Input from './components/reusable/Input'
import Button from './components/reusable/Button'
import Layout from './components/layout/Layout'

function App() {
  const [enteredInputName, setInputName] = React.useState('');
  const [enteredInputLastName, setInputLastName] = React.useState('');
  const [enteredModal, setModal] = React.useState(false);

  function modalChangeHandler(){
    setModal(enteredModal === true ? false: true); 
  }
  function changeNameHandler(event:any){
    setInputName(event.target.value);
  }
  function changeLastNameHandler(event:any){
    setInputLastName(event.target.value);
  }

  let modalContent; 
  
  if(enteredModal){ 
    modalContent = <Modal activated={enteredModal} closeModalHandler={modalChangeHandler}>
    <Input changeNameHandler={changeNameHandler} changeLastNameHandler={changeLastNameHandler}/>
    <Button interact={modalChangeHandler} name='Save' />
    </Modal>}

  return (
    <body className='body'>
      <Layout modalstate={modalChangeHandler}/>
      <div className='container text-center'>
        <div className='row row-cols-3'>
          <Card className='col' name={enteredInputName}
                lastName={enteredInputLastName}
                description='Hi, my name is Alexis Jares and im full stack developer'/>
          <Card className='col' name={enteredInputName}
                lastName={enteredInputLastName}
                description='Hi, my name is Alexis Jares and im full stack developer'/>
          <Card className='col' name={enteredInputName}
                lastName={enteredInputLastName}
                description='Hi, my name is Alexis Jares and im full stack developer'/>
          
          </div>
      </div>
      {modalContent}
    </body>
  )
}

export default App
