import React, { Fragment } from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Employees from './components/Employees';
import EmployeesList from './components/EmployeesList';
function App() {
  return (
    <>
    
<Navbar/>

<Routes>
    <Route path="/" element={<Counter/>}/>
    <Route path="/employees" element={<Employees/>}/>
    <Route path="/employeeslist" element={<EmployeesList/>}/>
</Routes>
    
    </>

  );
}

export default App;
