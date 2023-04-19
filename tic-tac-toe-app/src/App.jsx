import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'



function Square() {

  /*
    "value" stores the value and "setValue" is a function that can be used to change the value. The "null"
    pased to "useState" is used as the initial value for this state variable. , so "value" here starts off
    equal to "null"
    
    Since the "Square" component no longer accepts props anymore, you'll remove the "value" prop from all 
    nine of the Square components created by the Board component.
  */
  const [value, setValue] = useState(null); 

  function handleClick() {
    setValue('X');
  }


  /*
    Then your referencing the "value" of the constant "value" from above using this notation to label the 
    button {value}
  */
  return (
    <button 
      className='square'
      onClick={handleClick}
    >

      {value}
      </button>
  );        
}


export default function Board() {
  return (
    <>
      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>

       <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
       </div>

        <div className='board-row'>
          <Square/>
          <Square/>
          <Square/>
        </div>
    </>
  ) 
}

