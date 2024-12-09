import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const SliderBtn = () => {
  return (
    <>
      <button
        className="hidden  duration-300 md:flex absolute top-1/2 left-0 -translate-x-full transform -translate-y-1/2  text-white rounded-full p-2 z-10"
        onClick={() =>
          document
            .getElementById("product-slider")
            .scrollBy({ left: -300, behavior: "smooth" })
        }
      >
        <ChevronLeft className="active:scale-90 duration-100 " size={24} />
      </button>
      <button
        className="hidden md:flex absolute duration-300 translate-x-full top-1/2 right-0 transform -translate-y-1/2  text-white rounded-full p-2 z-10"
        onClick={() =>
          document
            .getElementById("product-slider")
            .scrollBy({ left: 300, behavior: "smooth" })
        }
      >
        <ChevronRight className="active:scale-90 duration-100" size={24} />
      </button>
    </>
  );
};

export default SliderBtn;
