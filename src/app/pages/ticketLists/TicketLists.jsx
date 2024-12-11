import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TicketList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tickets = location.state?.tickets || []; 

  const handleTicketClick = (ticketId) => {
    navigate(`/ticket-detail/${ticketId}`);
  };
  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gray-200 text-black py-2 px-4 rounded hover:bg-primary-focus"
      >
        Back
      </button>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Ticket List</h1>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto" >
      {tickets.map((ticket) => (
          <div key={ticket.id} className="p-4 border rounded shadow cursor-pointer" onClick={() => handleTicketClick(ticket.id)}>
            <img
              src={ticket.photo}
              alt={ticket.ticketType}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-bold">
              {ticket.ticketType} - {ticket.ticketRole}
            </h2>
            <p className="text-sm">Price: {ticket.price}</p>
            <p className="text-sm">Dates: {ticket.date.join(", ")}</p>
          </div>
        ))}
        {/* {tickets.map((ticket) => (
          <div key={ticket.id} className="p-4 border rounded shadow" onClick={() => handleTicketClick(ticket.id)}>
            <img
              src={ticket.photo}
              alt={ticket.ticketType}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-bold">
              {ticket.ticketType} - {ticket.ticketRole}
            </h2>
            <p className="text-sm">Price: {ticket.price}</p>
            <p className="text-sm">Dates: {ticket.date.join(", ")}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TicketList;
