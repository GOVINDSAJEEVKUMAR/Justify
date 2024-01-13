import React, { Component } from 'react'
import  axios from 'axios'

export default class Prod extends Component {

  state = {
    Categories:'',
    image:'',
    name: '',
    price:''

  }

  handleChange = event => {
    this.setState({ 
      Categories:event.target.value,
      image:event.target.value,
      name: event.target.value ,
      price:event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      Categories:this.state.Categories,
      image:this.state.image,
      name: this.state.name,
      price:this.state.price

    };

    axios.post(`http://localhost:8910/project/addproduct`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
  
      return (
        <div className="hidden sm:block  w-full min-h-screen  bg-[url('https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat">
          
        
         <div className='flex flex-col p-80 py-7'> 
          {/* <h1 className=' text-4xl text-white font-bold text-center'>PRODUCT</h1> */}
          
            <form onSubmit={this.handleSubmit} className=' max-w[400px] w-full mx-auto bg-gray-900 p-8 px-10 rounded-lg'> 
              <h1 className=' text-4xl text-amber-100 font-bold text-center'>C.U.R.D</h1>
              {/* <div className=' flex flex-col text-gray-400 py-2 '>
                <label>Item ID</label>
                <input className=' w-60 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' type ="id"></input>
              </div> */}
     
              <div className=' flex flex-col text-gray-400 py-2 '>
                <label>Categories</label>
                <input className=' w-60 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none'
                  placeholder="Enter Categories" onChange={this.handleChange} name='categories' type="text"   /> 
              </div>
    
              <div className=' flex flex-col text-gray-400 py-2 '>
                <label>Item Image</label>
                <input className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none'
                  placeholder="image" onChange={this.handleChange} name='image' type="imageurl"  /> 
              </div>
              
    
              <div className='flex flex-row gap-20'>
    
              <div className=' flex flex-col text-gray-400 py-2 '>
                <label>Item Name</label>
                <input className=' w-60 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' 
                placeholder="Enter Proname" onChange={this.handleChange} name='name' type="name"   />
              </div>
    
              <div className=' flex flex-col text-gray-400 py-2 '>
                <label>Price</label>
                <input className=' w-60 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' 
                 placeholder="Price" onChange={this.handleChange}name='price' type="text"  /> 
              </div>
              </div>
              <div className='flex flex-row py-6 gap-32'>
            <button onClick={this.handleSubmit} className=' bg-yellow-500 w-36 h-10 rounded-lg' >ADD</button>
            {/* <button className=' bg-yellow-500 w-36 h-10 rounded-lg' >UPDATE</button> */}
            {/* <button className=' bg-yellow-500 w-36 h-10 rounded-lg' >DELETE</button> */}
          </div>
      </form>
          </div>
          </div>
      )
    
  }
}
