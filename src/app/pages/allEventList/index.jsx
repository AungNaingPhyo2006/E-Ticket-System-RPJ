import React from 'react'
import { useParams } from 'react-router-dom';

const AllEventList = (props) => {
    const { id } = useParams();
  return (
    <div>
     <h2 className="card-title text-xl">All Event List</h2>
     <h2 className="card-title text-xl"> ID is {id}</h2>
    </div>
  )
}

export default  AllEventList
