import React from "react";
import ProductCard from "../ui/ProductCard";
import { Link } from "react-router-dom";
import SliderBtn from "../ui/SliderBtn";
import { usePosts } from "../../api/reactQuery";
import { Loader2 } from "lucide-react";

const ProductsLists = () => {
  
  const { data: products, isLoading, isError } = usePosts();

  return (
    <section className=" bg-base-200 p-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6 px-1 lg:px-5">
          <h2 className="text-3xl font-bold text-white">Products</h2>
          <Link
          // to="/products"
          >
            <div>
              <button className=" border border-gray-300 b rounded-md px-4 py-2">
                <a className="text-gray-200 font-bold text-md">See More</a>
              </button>
            </div>
          </Link>
        </div>
        <div className="relative lg:mx-5">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : isError ? (
            <div className="text-center text-red-500">
              Error loading products. Please try again later.
            </div>
          ) : (
            <div
              id="product-slider"
              className="overflow-x-auto py-2 flex space-x-5 scroll-smooth scrollbar-hide"
            >
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <SliderBtn />
        </div>
      </div>
    </section>
  );
};

export default ProductsLists;
