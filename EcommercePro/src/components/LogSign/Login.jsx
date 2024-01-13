import  { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {authActions} from "../../../Store/Auth"




function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [data,setData] = useState({
    email:"",
    password:"",
  })
  console.log(data);

  const ChangeHandler = (e) =>{
    setData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  };

  const senderFunction = async()=>{
    const res = await axios.post("http://localhost:8910/project/login",{
      email:data.email,
      password:data.password,
    })
    .catch((error)=>{
      console.log(error);
    })
    const deta = await res.deta;
    return deta;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    senderFunction().then(()=>{
      dispatch(authActions.login())
    }).then(()=>{
      navigate('/');
    })
  }

  
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  ">
      <div className="hidden sm:block  w-full min-h-screen  bg-[url('https://images.unsplash.com/photo-1605003295623-ea4fd7ac6351?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat">
      {/* <img className=' w-full h-full object-cover ' scr=".../img/BiSidebar.jpg"alt="img"/> */}
      </div>

      <div className='flex flex-col justify-center  p-10 pt-20 '>
        <form className=' max-w[400px] w-full mx-auto bg-gray-900 p-8 px-10 rounded-lg' onSubmit={handleSubmit}> 
          <h1 className=' text-4xl dark:text-white font-bold text-center'>SIGN IN</h1>
          <div className=' flex flex-col text-gray-400 py-2'>
            <label>UserName</label>
            <input className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' placeholder="Enter email" onChange={ChangeHandler} name='email' type="email" ></input>
            </div>
          <div className=' flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' placeholder="password" onChange={ChangeHandler} name='password' type="password" ></input>
          </div>
            <button className=' w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-50/500 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SigIn</button>
          <p className=' font-medium  text-white'>Don't Have A Account
          <Link to='/sigup'>
          <button className=' gap-6 w-40 my-5 py-2 bg-teal-500 shadow-lg shadow-teal-50/500 hover:shadow-teal-500/40 text-white font-semibold rounded-lg p-4'>SigUp </button>
          </Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
