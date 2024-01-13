import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp ,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    
        
        <div className='flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white shadow-2xl p-5'>

            <nav className=' flex flex-row gap-20  pl-16'>
                <a className =" hover:text-yellow-500 transition-all cursor-pointer"href='ABCDEFG@gmail.com'>
                <MdEmail size={30}/>
                </a>
                <a className =" hover:text-yellow-500 transition-all cursor-pointer"href='987654321'><FaWhatsapp size={30}/></a>
                
                <a className =" hover:text-yellow-500 transition-all cursor-pointer"href='/contact'>
                <FaInstagram size={30}/>
                    </a>
            
            </nav>
        </div>
        
      
  )
}

export default Footer
