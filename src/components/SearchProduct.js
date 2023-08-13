import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {CgProfile} from "react-icons/cg"
import { Link, useNavigate } from 'react-router-dom'
const SearchProduct = ({userName}) => {
const navigate=useNavigate()
  const logoutUser=()=>{
  localStorage.removeItem("register-user")
  toast.success("user Logout Successfully")

setTimeout(()=>{
  navigate("/login")
},2000)

  }


  return (
    <div  className='py-2'>
        <nav className="navbar bg-transperent">
  <div className="d-flex justify-content-center container-fluid">
    <form className="d-flex" role="search">
      <input  style={{outline:"none"}} className="form-control search-wrap me-2" type="search" placeholder="Search Product" aria-label="Search"/>
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
    <div className='ms-5'>
      
    <div className="dropdown">
  <button  className={`btn btn-transperent  `} type="button" data-bs-toggle="dropdown">
  <CgProfile/>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">{userName}</a></li>
 <li><a onClick={logoutUser} className="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default SearchProduct