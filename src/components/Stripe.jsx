import React from 'react';

function Stripe({ val }) {
  return (
    <div className='w-[16.66%] px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-2 border-zinc-700 flex justify-between items-center transition duration-300 transform hover:scale-125 '>
      <img className='h-6' src={val.url} alt="" />
      <span className='font-semibold text-lg'>{val.number}</span>
    </div>
  );
}

export default Stripe;
