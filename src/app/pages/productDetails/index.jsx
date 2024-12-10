import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { itemList } from '../../api/apiDemoData';

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
      <button className="btn btn-gray mb-4" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="card bg-base-100 shadow-xl p-6">
        <img
          src={product.photo}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-2">Price: ${product.price}</p>
        <p className="text-lg text-gray-700 mb-2">Stock: {product.stock}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
