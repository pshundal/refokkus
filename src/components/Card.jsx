import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";


function Card({ width, start, para, hover = "none" }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col ${
        hover ? hover : ""
      }`}
    >
     
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Up Next: Culture</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Who we are</h1>
      </div>

      <div className="down w-full mt-60">
        {start && (
          <div>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button
              className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50"
            >
              Start
            </button>
          </div>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
