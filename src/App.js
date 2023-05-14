import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const mystate=useSelector((state)=>state.changeNumber);
  const dispatch =useDispatch();

  return (
    <React.Fragment>
    <div className='container'>
    <h1>Increment Decrement  Counter</h1><br />
    <h3>Using React Redux</h3>
    <div className='quantity'> 
    <button className='plus' title='Dncrement' onClick={()=>dispatch(decNumber())} ><span>-</span></button>
    <input type="text" name="quantity" className='input' value={mystate} />
    <button className='minus' title='Increment' onClick={()=>dispatch(incNumber())}><span>+</span></button>
    </div>

    </div>
    </React.Fragment>
  )
}

export default App