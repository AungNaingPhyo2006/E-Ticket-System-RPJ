import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import assets from "../../assets";
const Cards = ({ festival }) => {
  return (
    <div className=" card  bg-base-200 cursor-pointer duration-300 active:scale-95 rounded-lg shadow-xl overflow-hidden">
    <div key={festival.id} className="w-full  ">
         <div className="card bg-gray-800 shadow-md p-0 h-90">
           <img
            src={assets.EventImage}
            //  src={festival.photo}
             alt={festival.name}
             className="w-full h-80 object-cover mb-4 rounded-lg"
           />
           <p className="text-lg font-semibold p-4 text-white">{festival.name}</p>
         </div>
    </div>
    </div>
  );
};

export default Cards;
