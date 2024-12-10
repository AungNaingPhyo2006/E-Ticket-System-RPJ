import React from "react";
import Cards from "../ui/Cards";

const FestivalList = ({ title, itemList }) => {

  return (
    <div className="card w-full bg-base-100 shadow-xl p-4 mb-6">
     <div className="flex items-center justify-between mb-4">
     <h2 className="card-title text-xl">{title}</h2>
  <button 
    onClick={() => console.log("See more clicked")} 
    className="text-blue-500 hover:underline focus:outline-none">
    <h2 className="card-title text-xl">See All</h2>
  </button>
</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {itemList.map((festival) => (
           <div key={festival.id} className="w-full lg:w-auto lg:h-auto">
             <Cards festival={festival} /> 
             </div>
      ))}
    </div>
  </div>
  );
};

export default FestivalList;
