import React from "react";
import { CalendarDays, MapPin } from "lucide-react";

const Cards = ({ festival }) => {
  return (
    <div className="bg-gray-800 cursor-pointer duration-300 active:scale-95 rounded-lg shadow-xl overflow-hidden">
      <div className="md:flex">
        <div className="md:w-2/5 h-60 md:h-auto relative">
          <img
            src={festival.photo}
            alt={festival.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 p-6">
          <h2 className="text-2xl font-bold text-center md:text-left mb-4">
            {festival.name}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CalendarDays className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium">
                  {festival.startDate} - {festival.endDate}
                </p>
                <p className="text-xs text-gray-500">Festival Dates</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm font-medium">{festival.location}</p>
                <p className="text-xs text-gray-500">Location</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Festival
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
