import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ticketDetailData } from "../../api/apiDemoData";

const TicketDetail = () => {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  useEffect(() => {
    const selectedTicket = ticketDetailData.find((ticket) => ticket.id === parseInt(ticketId));
    setTicket(selectedTicket);
  }, [ticketId]);

  const handleBuyNow = () => {
    // Handle the buy now functionality
    alert(`You have selected ${ticketCount} tickets for ${ticket.ticketType} - ${ticket.ticketRole}`);
  };

  if (!ticket) {
    return (
      <div className="min-h-screen bg-base-200 p-4 md:p-8 flex items-center justify-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gray-200 text-black py-2 px-4 rounded hover:bg-primary-focus"
      >
        Back
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Ticket Detail</h1>
        
        <div className="p-4 border rounded shadow">
          <img
            src={ticket.photo}
            alt={ticket.ticketType}
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <h2 className="text-lg font-bold">{ticket.ticketType} - {ticket.ticketRole}</h2>
          <p className="text-sm">Price: {ticket.price}</p>
          <p className="text-sm">Dates: {ticket.date.join(", ")}</p>

          <div className="my-4">
            <label className="block text-sm font-bold mb-2">Quantity</label>
            <input
              type="number"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              min="1"
              className="p-2 border rounded w-24"
            />
          </div>

          <button
            onClick={handleBuyNow}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-focus"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;




