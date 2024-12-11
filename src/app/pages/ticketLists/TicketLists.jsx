import { ChevronLeft } from "lucide-react";
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
     
      <div className="w-full max-w-4xl  gap-4 mx-auto my-5" >
            <button 
            className="flex items-center space-x-2 text-xl cursor-pointer hover:text-blue-500 focus:outline-none"
            onClick={() => navigate(-1)}
          >

            <ChevronLeft className="w-5 h-5" />
            <h1 className="font-bold">Ticket List</h1> 
          </button>
      </div>

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
