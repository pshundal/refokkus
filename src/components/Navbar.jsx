import React from 'react';
import Button from './Button';

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto p-6 flex items-center justify-between border-b-2 border-zinc-700 '>
      <div className='nleft flex items-center'>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.NOcQR-_4K21QEOeICSWV5gHaD4&pid=Api&P=0&h=180"
          alt="logo"
          className='overflow-hidden hover:scale-125 transition duration-300 transform '
          
        />
        <div className='links flex items-center gap-20 ml-20 '>
          {["Home", "Work", "Culture", "News"].map((elem, index) => (
            <a
              key={index}
              className="font-regular text-2xl flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white transition duration-300 transform hover:scale-125 hover:shadow-lg hover:shadow-white-500/50"
              href='#'
            >
              {elem.length === 0 && (
                <span className="w-[2px] h-7 bg-zinc-700 inline-block"></span>
              )}
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.55em #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-green-500"
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
