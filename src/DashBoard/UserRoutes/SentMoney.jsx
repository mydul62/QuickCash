import React from 'react';

const SentMoney = () => {
  return (
    <div className='h-[calc(100vh-48px)] flex justify-center items-center'>
      <div className=' w-[70%] mx-auto'>
      <h2 className=' text-3xl text-green-600 text-center'>Sent money</h2>
      <div>
      <section className="bg-white">
      <div className="max-w-3xl px-6 py-4 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Enter reciepient Number</h1>
        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
          <input 
            id="email" 
            type="number" 
            className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" 
            placeholder="Enter quickcash number"
          />
          <button 
            className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div> 
    </section>
      </div>
      </div>
    </div>
  );
};

export default SentMoney;