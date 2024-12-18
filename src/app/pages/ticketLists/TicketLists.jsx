import { ChevronLeft } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import assets from "../../assets";

const TicketList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tickets = location.state?.tickets || [];

  const handleTicketClick = (ticketId) => {
    navigate(`/ticket-detail/${ticketId}`);
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8 relative">
      <div className="w-full max-w-4xl gap-4 mx-auto my-5">
        <button
          className="flex items-center space-x-2 text-xl cursor-pointer hover:text-blue-500 focus:outline-none"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-5 h-5" />
          <h1 className="font-bold">Ticket List</h1>
        </button>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-gray-800 p-4 border rounded-lg shadow cursor-pointer flex flex-row lg:flex-col"
            onClick={() => handleTicketClick(ticket.id)}
          >
            <img
              src={assets.TicketImage}
              alt={ticket.ticketType}
              className="w-1/3 h-auto object-cover rounded-lg mr-4 lg:w-full lg:mb-4"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-lg font-bold text-white">
                {ticket.ticketType} - {ticket.ticketRole}
              </h2>
              <p className="text-sm text-white">Price: {ticket.price}</p>
              <p className="text-sm text-white">Dates: {ticket.date.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;




