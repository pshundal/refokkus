import React from 'react';
import Card from './Card';

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card 
          width="basis-1/3" 
          start={false} 
          para={true} 
          hover="transition duration-300 transform hover:scale-110 hover:bg-violet-600 hover:p-1 hover:z-10"
        />
        <Card 
          width="basis-2/3" 
          start={true} 
          para={false} 
          hover="transition duration-300 transform hover:scale-110 hover:bg-violet-600 hover:p-3 hover:z-10"
        />
      </div>
    </div>
  );
}

export default Cards;
