import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Render from './Components/Render';
import Countries from './Components/Countries';
import Conversion from './Components/Conversion';


let api='https://v6.exchangerate-api.com/v6/`{key}`/pair/EUR/GBP/AMOUNT'
function App() {
 
  return (<>
    <Conversion />
  </>)
 
}

export default App;
