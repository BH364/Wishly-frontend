import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event)=>{
       event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-current'>Subscribe now & get 20% off</p>
        <p className='text-current mt-3'>
        Subscribe now for 20% off your first purchase and get exclusive updates on new arrivals and offers!
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 bg-gray-50 shadow-md rounded-lg">
    <input
        className="w-full sm:flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-500 px-2 py-3"
        type="email"
        placeholder="Enter your email"
        required
    />
    <button
        type="submit"
        className="bg-black text-white text-xs px-10 py-4 rounded-md transition-transform duration-200 ease-in-out hover:bg-gray-800 hover:scale-105 shadow-lg"
    >
        SUBSCRIBE
    </button>
</form>

    </div>
  )
}

export default NewsLetterBox