import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product: { id, image } }) => {
  console.log("PD ID Check ===>", id);

  return (
    <Link
      to={`/products-detail/:${id}`}
      className="card cursor-pointer active:scale-95 duration-300 bg-base-100 w-72 sm:w-64 h-[300px] shadow-xl flex-shrink-0"
    >
      <figure className="px-5 pt-5">
        <img src={image} alt="Shoes" className="rounded-xl object-contain" />
      </figure>
      <div className="px-5 py-4">
        <h2 className="card-title">
          <p>Product Nameeee</p>
        </h2>
        <p className="line-clamp-2">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className=" justify-end my-4 space-x-3">
          <p className="badge badge-outline">Fashion</p>
          <p className="badge badge-outline">Products</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
