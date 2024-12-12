import React from "react";
import ProductCard from "../ui/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import SliderBtn from "../ui/SliderBtn";
import { usePosts } from "../../api/reactQuery";
import { Loader2 } from "lucide-react";

const ProductsLists = ({id, title,itemList}) => {
  const navigate = useNavigate();
  const handleSeeAllClick = () => {
    navigate(`/product-list/${id}`);
  };
  const { data: products, isLoading, isError } = usePosts();

  return (
    <section>
       <div className=" w-full p-4 mb-6">
       <div className="flex items-center justify-between mb-4">
     <h2 className="card-title text-xl">{title}</h2>
  <button 
    onClick={handleSeeAllClick} 
    className="text-blue-500 hover:underline focus:outline-none">
    <h2 className="card-title text-xl">See All</h2>
  </button>
</div>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {itemList.map((item) => (
         <Link to={`/product-detail/${item.id}`}>
        <div key={item.id} className="card bg-gray-800 shadow-md p-4  h-30 items-center justify-center bg-gray-800 cursor-pointer duration-300 active:scale-95 rounded-lg shadow-xl overflow-hidden">
          <img src={item.photo} alt={item.name} className="w-60 h-30 object-cover mb-4 rounded-md" />
          <p className="text-lg font-semibold text-white">{item.name}</p>
        </div>
         </Link> 
      ))}
    </div>
  </div>
    </section>
    // <section className=" bg-base-200 p-5">
    //   <div className="container mx-auto">
    //     <div className="flex justify-between items-center mb-6 px-1 lg:px-5">
    //       <h2 className="text-3xl font-bold text-white">Products</h2>
    //       <Link
    //       // to="/products"
    //       >
    //         <div>
    //           <button className=" border border-gray-300 b rounded-md px-4 py-2">
    //             <a className="text-gray-200 font-bold text-md">See More</a>
    //           </button>
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="relative lg:mx-5">
    //       {isLoading ? (
    //         <div className="flex justify-center items-center h-64">
    //           <Loader2 className="h-8 w-8 animate-spin text-primary" />
    //         </div>
    //       ) : isError ? (
    //         <div className="text-center text-red-500">
    //           Error loading products. Please try again later.
    //         </div>
    //       ) : (
    //         <div
    //           id="product-slider"
    //           className="overflow-x-auto py-2 flex space-x-5 scroll-smooth scrollbar-hide"
    //         >
    //           {products?.map((product) => (
    //             <ProductCard key={product.id} product={product} />
    //           ))}
    //         </div>
    //       )}
    //       <SliderBtn />
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProductsLists;
