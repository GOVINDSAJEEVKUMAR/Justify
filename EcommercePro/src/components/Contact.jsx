// import { useState } from "react";
// // import axios from "axios";

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   function submit(e) {
//     // This will prevent page refresh
//     e.preventDefault();

//     axios
//       .post(
//         // replace this with your own unique endpoint URL
//         "https://formcarry.com/s/XXXXXXX",
//         {
//           email: email,
//           message: message
//         },
//         {
//           headers: {
//             Accept: "application/json"
//           }
//         }
//       )
//       .then((res) => {
//         // success http code
//         if (res.data.code === 200) {
//           setSubmitted(true);
//         } else {
//           setError(res.data.message);
//         }
//       });
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (submitted) {
//     return <p>We've received your message, thank you for contacting us!</p>;
//   }

//   return (
//     <form onSubmit={submit}>
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <label htmlFor="message">Message</label>
//       <textarea
//         id="message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />

//       <button type="submit">Send</button>
//     </form>
//   );
// }

import React from 'react'

const Contact = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 ">
      <div className="hidden sm:block  w-full min-h-screen  bg-[url('https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]  bg-cover bg-no-repeat">
      </div>
      <div className='flex flex-col justify-center  p-10 pt-20 '>
        <form className=' max-w[400px] w-full mx-auto bg-gray-900 p-8 px-10 rounded-lg'> 
          <h1 className=' text-4xl dark:text-white font-bold text-center'>CUSTOMER SUPPORT</h1>
          <div className=' flex flex-col text-gray-400 py-2 '>
            <label>UserName</label>
            <input className=' rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' type ="text"></input>
          </div>

          <div className=' flex flex-col text-gray-400 py-2'>
            <label>Message</label>
            <input className=' rounded-lg bg-gray-700 mt-2 p-5 focus:border-blue-400 focus:bg-gray-800 focus:outline-none' type ="message"></input>
          </div>

          <button className=' bg-orange-500 font-medium w-full rounded-lg my-5 py-2 '>Submit</button>
          </form>
          </div>
      </div>
  )
}

export default Contact
