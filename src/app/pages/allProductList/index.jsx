import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productList } from '../../api/apiDemoData';
import { ChevronLeft } from 'lucide-react';
import assets from '../../assets';

const AllProductList = () => {
  const navigate = useNavigate();
   return (
    <div className="container mx-auto p-4">
      <div className='container mx-auto flex items-center  justify-between  space-x-4'>
      <button 
        className="flex items-center space-x-2 text-xl cursor-pointer hover:text-blue-500 focus:outline-none"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="w-5 h-5" />
       <h2 className="card-title text-xl">{productList.title}</h2>
      </button>
      </div>
    

     <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.itemList.map((product) => (
           <Link
           to={`/product-detail/${product.id}`}>
          <div
            key={product.id}
            className="card bg-gray-800 shadow-xl p-4 flex flex-col items-center"
          >
            <img
          src={assets.ProductImage} 
              // src={product.photo}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h4 className="text-lg font-medium mt-2 text-white">{product.name}</h4>
          </div>
         </Link>
        ))}
      </div>

    </div>
  )
}

export default AllProductList

