import React from 'react'
import { useParams } from 'react-router-dom';

const AllProductList = () => {
    const { id } = useParams();
   return (
    <div>
     <h2 className="card-title text-xl">All Product List</h2>
     <h2 className="card-title text-xl"> Product ID is {id}</h2>
    </div>
  )
}

export default AllProductList

