import React from "react";
import { NavLink } from "react-router-dom";

 function Navbar() {
  return (
    <>
      <nav className=" absolute w-screen ">
      <div className="p-3 flex justify-between  items-center mx-auto w-5/6 h-20">
         <img src="/" alt="Moments_By_Saksham_logo" />
        <div >
            <ul className="flex items-center font-sans text-white">
                <li className="mx-4 text-lg nav-link "><NavLink to='/' activeClassName='border-b-2' >Home</NavLink></li>
                <li className="mx-4 text-lg  nav-link "><NavLink to='/about' activeClassName='border-b-2' >About Us</NavLink></li>
                <li className="mx-4 text-lg  nav-link "><NavLink to='/portfolio' activeClassName='border-b-2'>Portfolio</NavLink></li>
                <li className="mx-4 text-lg  nav-link "><NavLink to='/services'activeClassName='border-b-2' >Services</NavLink></li>
                <li className="mx-4 text-lg  nav-link "><NavLink to='/contact' activeClassName='border-b-2'>Contact Us</NavLink></li>
            </ul>
        </div >
      </div>
      </nav>
      
    </>
  )
}

export default Navbar
