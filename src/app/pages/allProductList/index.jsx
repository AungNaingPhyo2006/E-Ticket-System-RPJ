import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productList } from '../../api/apiDemoData';

const AllProductList = () => {
   return (
    <div className="container mx-auto p-4">
     <h2 className="card-title text-xl">{productList.title}</h2>
     {/* <h2 className="card-title text-xl"> Product catagory ID is {id}</h2> */}

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.itemList.map((product) => (
           <Link
           to={`/product-detail/${product.id}`}>
          <div
            key={product.id}
            className="card bg-base-100 shadow-xl p-4 flex flex-col items-center"
          >
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md"
            />
            <h4 className="text-lg font-medium mt-2">{product.name}</h4>
          </div>
         </Link>
        ))}
      </div>

    </div>
  )
}

export default AllProductList

