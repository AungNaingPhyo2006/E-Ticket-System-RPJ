import React from "react";
import Cards from "../ui/Cards";

const FestivalList = () => {
  const festivalList = [
    {
      id: 1,
      name: "Over Flow",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8-n4TvVCR2YkE2Y1RWqNNUK9VXUpEh1cPA&s",
      startDate: "2024-12-07",
      endDate: "2024-12-08",
      location: "Yangon Easter Park",
    },
    {
      id: 2,
      name: "NYER",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUe-FEdfvmbPXm-ZKXNEs2jeRMGt-detjZw&s ",
      startDate: "2024-12-30",
      endDate: "2024-12-30",
      location: "Yangon Easter Park",
    },
  ];

  return (
    <div className="py-12 bg-base-200 p-3 lg:p-10">
      <div className="container mx-auto">
        <div className="flex mb-6 px-1">
          <h2 className="text-3xl font-bold text-white">Festivals' Lists</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {festivalList.map((festival) => (
            <div key={festival.id} className="w-full lg:w-auto lg:h-auto">
              <Cards festival={festival} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalList;
