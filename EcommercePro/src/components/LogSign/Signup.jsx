import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useState} from 'react'

import axios from 'axios'
axios.defaults.withCredentials = true;

const SigIn = () => {
  
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendData = async () => {
    const res = await axios
      .post("http://localhost:8910/project/sign", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      // .catch((error) => {
      //   console.log(error);
      // });
    console.log(res)
    const Data = await res.Data;
    console.log(Data.user);
    return Data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData().then(() => navigate('login') );
    setTimeout(() => {
      setFormData({ name: "", email: "", password: "" });
    }, [4000]);
  };

  

  

return (
    
    <div className=" grid grid-cols-1 sm:grid-cols-2  ">
      <div className="hidden sm:block  w-full h-full  min-h-screen bg-[url('https://images.unsplash.com/photo-1605003295623-ea4fd7ac6351?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat">
      
      </div>
      <div className='flex flex-col justify-center p-10 pt-24'>
        <form className=' max-w[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit } > 
          <h1 className=' text-4xl dark:text-white font-bold text-center'>SIGN IN</h1>
          <div className=' flex flex-col text-gray-400 py-2'>
            <label>UserName</label>
            <input className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' placeholder="Enter Username" onChange={handleChange} name='name' type="name"  ></input>
            </div>

          <div className=' flex flex-col text-gray-400 py-2'>
            <label>Email</label>
            <input className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' placeholder="Enter email" onChange={handleChange} name='email' type="email" ></input>
          </div>

          <div className=' flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' placeholder="Enter password" onChange={handleChange} name='password' type="password"  ></input>
          </div>
            <button className=' w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-50/500 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SigIn</button>
          
        </form>
        
      </div>
    </div>
        
    
  )

}

export default SigIn
