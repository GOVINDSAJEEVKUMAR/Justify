import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' px-6 py-1 border-solid border-4 border-x-orange-500/100 border-y-orange-500/100 text-orange-300 hover:bg-orange-500/100 hover:text-black transition-all rounded-full'>
        {props.title}
      </button>
    </div>
  )
}

export default Button
