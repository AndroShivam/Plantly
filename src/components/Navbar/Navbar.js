import React from 'react'
import './Navbar.css'

const Navbar = () => {
   return(
       <>
        <nav className = "navbar">
            <div className = "navbar-container">
                <h1 className = "navbar-logo"><a href = "/" >Plantly</a></h1>
                <ul className = "nav-items">
                    <li className = "nav-links"><a href = "/">Home</a></li>
                    <li className = "nav-links"><a href = "/about">About</a></li>
                </ul>
            </div>
        </nav>
       </>
   )
}


export default Navbar