import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { itemList } from '../../api/apiDemoData';
import { ChevronLeft } from 'lucide-react';
import assets from '../../assets';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the product by ID
  const product = itemList.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
    <h2 className="text-xl text-red-500">Product not found!</h2>
    <button className="btn btn-gray mb-4" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
       <div  className="container mx-auto p-4">
       <button 
        className="flex items-center space-x-2 text-xl cursor-pointer hover:text-blue-500 focus:outline-none"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="w-5 h-5" />
        <h1 className="font-bold">Product Details</h1> 
      </button>
       </div>

      <div className="card bg-gray-800 items-center shadow-xl p-6">
        <img
          src={assets.ProductImage} 
          // src={product.photo}
          alt={product.name}
          className="w-50 h-50 sm:w-64 sm:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-112 object-cover mb-6 rounded-lg"
        />
        <h2 className="text-white text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-white text-lg text-gray-700 mb-2">Price: ${product.price}</p>
        <p className="text-white text-lg text-gray-700 mb-2">Stock: {product.stock}</p>
        <p className="text-white text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
