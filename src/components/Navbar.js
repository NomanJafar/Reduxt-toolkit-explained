import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{"color":"white"}}>Redux Toolkit</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" style={{"color":"white"}} to="/">Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{"color":"white"}} to="/employees">Employees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{"color":"white"}} to="/employeeslist">EmployeesList</Link>
        </li>
     
      </ul>

    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar