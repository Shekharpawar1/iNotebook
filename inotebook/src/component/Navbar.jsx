import React,{useEffect} from 'react'
// import { NavLink } from 'react-router-dom'
import {NavLink} from "react-router-dom"
import { useLocation } from 'react-router-dom';

function Navbar() {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
      }, [location]);
  return (
    <>
       <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
                <NavLink  className="navbar-brand" to="/">INotebook</NavLink> 
                

        <div className="navbar d-flex">
                <ul className="navbar-nav mr-auto d-flex">
                <li className="nav-item d-flex  ">
                    <NavLink  className={`nav-link  text-light ${location.pathname ==="/" ? "active" : ""}` } to="/">Home</NavLink> 
                </li>
                <li className="nav-item">
                    <NavLink  className={`nav-link text-light   ${location.pathname ==="/about" ? "active" : ""} ` }to="/about">About</NavLink> 
                </li>
                
                </ul>
            
            </div>
    </nav>
</>
)}

export default Navbar