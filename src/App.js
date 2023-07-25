
import './App.css';


import Countries from './Components/Countries';
import Conversion from './Components/Conversion';
import { Route,Routes } from 'react-router-dom';

function App() {
 
  return (<Routes>
  <Route path='/' exact element={ <Conversion />} />
  <Route path='codes' exact element={<Countries />} />
   
  </Routes>)
 
}

export default App;
