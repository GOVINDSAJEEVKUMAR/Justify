import React, { useState } from 'react'
import {Link,Route,Routes} from "react-router-dom"
import { DiAndroid } from "react-icons/di";
import Button from '../layouts/Button';
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineMenuFold} from "react-icons/ai";
import {BiChevronDown} from "react-icons/bi"
import { IoLogOut } from "react-icons/io5";
import { FaUserCircle,FaCartArrowDown } from "react-icons/fa"



const Navbar = () => {
  const [menu,setMenu] =useState(false);
  const handleChange =()=>{
    setMenu(!menu);
  }
  const closeMenu =()=>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
              <Link to=""  ><h1 className=' flex flex-row gap-5 text-3xl font-semibold text-yellow-500'><FaUserCircle size={40} className=' text-blue-400'/>
                  {user.user.name}  </h1></Link>
            
            <nav className=' hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link to='/'
          
                duration={500} 
                className=' hover:text-yellow-300  transition-all cursor-pointer' >
                  Home</Link>
                <Link to='/about'
                duration={500} 
                className=' hover:text-yellow-300   transition-all cursor-pointer' >
                  About</Link>
                {/* <div className='relative group'>
                  <div className=' flex items-center gap-1'> */}
                    <Link to='product'
                  
                    duration={500} 
                    className=' hover:text-yellow-300  transition-all cursor-pointer' >
                      Product</Link>
                    
                    {/* <BiChevronDown className="cursor-pointer" size={25} />
                 
                  </div> */}
                  {/* <ul className=' absolute  hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5 '>
                    <li>
                    <Link to='product'
                  
                    duration={500} 
                    className=' hover:text-yellow-300  transition-all cursor-pointer' >
                      New Launch</Link>
                    </li>
                    <li>
                    <Link to='product'
                
                     duration={500} 
                     className=' hover:text-yellow-300  transition-all cursor-pointer' >
                      Phone</Link>
                    </li>
                    <li>
                    <Link to='product'
                  
                    duration={500} 
                    className=' hover:text-yellow-300  transition-all cursor-pointer' >
                      Audio</Link>
                    </li> 
                    <li>
                    <Link to='product'
                
                     duration={500}
                      className=' hover:text-yellow-300  transition-all cursor-pointer' >
                        Tablet & Wearable</Link>
                    </li>
                    <li>
                    <Link to='product'
                
                     duration={500} 
                     className=' hover:text-yellow-300  transition-all cursor-pointer' >
                      Accessories</Link>
                    </li> 
                  </ul> */}

                {/* </div> */}
                <Link to='contact'
        
                 duration={500}
                  className= 'hover:text-yellow-300  transition-all cursor-pointer' >
                    Contact</Link>

                    {/* <Link to='/'         
          duration={500} 
          className=' hover:text-red-300  transition-all cursor-pointer' >
            <FaUserCircle size={40} /></Link> */}



                    <Link to='/'         
          duration={500} 
          className=' hover:text-red-300  transition-all cursor-pointer' >
            <IoLogOut size={60}/></Link>

            </nav>
            <div className=' md:hidden flex items-center'>
              {menu ? (
              <AiOutlineClose size={25} onClick={handleChange}  />
              ):(<AiOutlineMenuFold size={25}onClick={handleChange}/>)
            }
            </div>
        </div>
        <div className={`${menu ? "translate-x-0":"-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>

                <Link to='/'
          
                 duration={500} 
                 className=' hover:text-yellow-300  transition-all cursor-pointer' >
                  Home</Link>
                <Link to='/about'
        
                 duration={500} 
                 className=' hover:text-yellow-300   transition-all cursor-pointer' >
                  About</Link>
                <Link to='product'
          
                 duration={500}
                  className=' hover:text-yellow-300  transition-all cursor-pointer' >
                    Product</Link>
                <Link to='contact'
          className= 'hover:text-yellow-300  transition-all cursor-pointer' >Contact</Link>
                
                {/* <Link to='/'         
          duration={500} 
          className=' hover:text-red-300  transition-all cursor-pointer' >
            <FaUserCircle size={40} /></Link> */}
                
                
                
                <Link to='/'         
          duration={500} 
          className=' hover:text-red-300  transition-all cursor-pointer' >
            <IoLogOut size={60} /></Link>

        </div>
      </div>
    </div> 
  )
}

export default Navbar
