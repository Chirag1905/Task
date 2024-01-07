import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import EmpListing from './Components/EmpListing';
import EmpCreate from './Components/EmpCreate';
import EmpShow from './Components/EmpShow';
import EmpEdit from './Components/EmpEdit';
import EmpRegister from './Components/EmpRegister';
import EmpLogin from './Components/EmpLogin';

function App() {
  return (
    <div style={{marginTop:"3vh"}}>
      <h1 className='text-center'  style={{color:"#03e9f4"}}>MY WEB</h1>
      <Routes>
        <Route path='/' element={<EmpRegister />}></Route>
        <Route path='/home' element={<EmpListing />}></Route>
        <Route path='/Login' element={<EmpLogin />}></Route>
        <Route path='/crud/create' element={<EmpCreate />}></Route>
        <Route path='/crud/show/:empid' element={<EmpShow />}></Route>
        <Route path='/crud/edit/:empid' element={<EmpEdit />}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
