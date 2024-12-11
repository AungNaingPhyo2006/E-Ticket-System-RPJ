import React from "react";
import { useLocation } from "react-router-dom";

const TicketList = () => {
  const location = useLocation();
  const tickets = location.state?.tickets || []; 

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Ticket List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="p-4 border rounded shadow">
            <img src={ticket.photo} alt={ticket.ticketType} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-lg font-bold">{ticket.ticketType} - {ticket.ticketRole}</h2>
            <p className="text-sm">Price: {ticket.price}</p>
            <p className="text-sm">Dates: {ticket.date.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
