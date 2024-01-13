import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle,FaStore } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { VscFeedback } from "react-icons/vsc";
import { IoLogOut } from "react-icons/io5";

function Navigate() {
  return (
    <div className="flex fixed">
      <aside className=" w-52 bg-gray-800 h-screen text-white p-4  bg-white/30 bg-[url('https://i.pinimg.com/474x/cb/bb/4a/cbbb4a0f6711eb6f60ef02cb94ac6458.jpg')] bg-cover">
      
        <h1 className=' flex font-bold text-3xl text-white'> Realme </h1>
        <div className='flex flex-col p-8 text-2xl  gap-10'>
        <Link to='/'         
          duration={500} 
          className=' hover:text-yellow-300  transition-all cursor-pointer' >
            <FaUserCircle size={60}/>
            </Link>

            <Link to='/'         
          duration={500} 
          className=' hover:text-yellow-300  transition-all cursor-pointer' >
            <FaStore size={60}/></Link>

            <Link to='pro'         
          duration={500} 
          className=' hover:text-yellow-300  transition-all cursor-pointer' >
            <FaCartShopping size={60}/></Link>

            <Link to='/'         
          duration={500} 
          className=' hover:text-yellow-300  transition-all cursor-pointer' >
            <VscFeedback size={60}/></Link>

            

            <Link to='/'         
          duration={500} 
          className=' hover:text-red-700  transition-all cursor-pointer' >
            <IoLogOut size={60}/></Link>

        </div>
                  
      </aside>
      
    </div>
  )
}

export default Navigate
