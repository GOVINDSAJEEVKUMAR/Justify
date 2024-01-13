import React from 'react'
import Button from '../layouts/Button'
import { Link,Route,Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./img/img2.jpg')] bg-cover bg-no-repeat">
      <div className=' w-full lg:w-2/3 space-y-5'>
        <h1 className=' text-white font-semibold text-6xl animate-pulse bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-200 bg-clip-text text-transparent'>REALME</h1>
        <p className='text-white '>
        In the palm of innovation, a pocket-sized marvel connects us across miles, captures moments in a blink, and empowers knowledge at our fingertips. A modern essential, transcending time and distance.
        </p>
        <div className=' lg:pl-44'>
        <Link to='login'>
                <Button title="Signup"/></Link>
        </div>
      </div>
    </div>

    

    </div>
    
  )
}

export default Home
