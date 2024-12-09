import React from "react";

const TicketCard = ({ name, photo }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
      <figure>
        <img
          src={photo}
          alt={name}
          className="w-full h-48 object-cover md:w-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
