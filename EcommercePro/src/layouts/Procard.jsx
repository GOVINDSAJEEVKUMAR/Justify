import React from 'react'

const Procard = (props) => {
  return (
    <div>
        <div class=" flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div class=" mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl ">
    <img
      src={props.img}
      alt="card-image" class="object-cover w-full h-60" />
  </div>
  <div class="p-6">
    <div class="flex items-center justify-between mb-2">
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {props.title}
      </p>
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {props.price}
      </p>
    </div>
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      <ul>
        <li>Brand Product</li>
        <li>3 Year Warranty</li>
        <li>Free Service </li>
        <li>Coupons and Offter are applicable</li>
      </ul>
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class=" w-full h-10 bg-cyan-600 font-semibold rounded-xl "
      type="button">
      Add to Cart
    </button>
  </div>
</div>
    </div>
  )
}

export default Procard






