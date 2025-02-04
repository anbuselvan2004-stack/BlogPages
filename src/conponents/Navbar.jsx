import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//react icons 
//import { FaFacebook , FaTwitter, FaBars } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaXmark} from "react-icons/fa6";
import { FaBars  } from "react-icons/fa6";
import Model from './Model';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    // Navitem
    const navItems = [
        {path: "/", link:"Home",},
        {path: "/services", link:"Services",},
        {path: "/about", link:"About",},
        {path: "/blogs", link:"Blogs",},
        {path: "/contact", link:"Contact",},
    ]
    // model details
    const openModel = () =>{
        setIsModelOpen(true);
    }
    const closeModel = () =>{
        setIsModelOpen(false);
    }
  return (
   <header className='bg-black text-white fixed top-0 left-0 right-0'>
    <nav className='px-4 py-4 max-w-7xl  flex justify-between items-center'>
        <a href='/' className='text-xl   font-bold text-white'>Design <span className='text-orange-500'>DK</span></a>
        {/*navitions for lg devices*/}
        <ul className='md:flex gap-12 text-lg hidden'>
            {
                navItems.map(({path, link} ) => <li
                className='text-white' key={path}>
                   <NavLink className={({isActive, isPending}) =>
                   isActive 
                ? "active"
                 : isPending
                ? "pending" 
                 : ""}
                   to={path}>{link} </NavLink>
                </li>)
            }
        </ul>
        {/*  menu item*/ }
        <div className='text-white  gap-4 items-center lg:flex hidden'>
        <a href='/' className='hover:text-orange-600 '><FaFacebook /> </a>
        <a href='/' className='hover:text-orange-600 '><FaDribbble /></a>
        <a href='/' className='hover:text-orange-600 '><FaTwitter /> </a>
        <button onClick={openModel} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
        hover:text-orange-500 transition-all duration-200'>Log in</button>
        </div>
         
         {/* our Model component is here  */}
         <Model isOpen = {isModelOpen} onClose={closeModel}/>
         {/*mobile menu btn, display mobile screen */}
         <div className='md:hidden '>
            <button onClick={toggleMenu} className='cursor-pointer'>
                {
                    isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5 p-0'/>
                }
                </button>
        </div>
    </nav>
    <div>
    <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 p-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
        {
            navItems.map(({path,link}) => <li className='text-black' key={path}>
                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>)
        }
        
    </ul>   
    </div>
   </header>
  )
}

export default Navbar
