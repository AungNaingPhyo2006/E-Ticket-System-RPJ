import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ticketDetailData } from "../../api/apiDemoData";
import { ChevronLeft } from "lucide-react";
import assets from "../../assets";

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
    <div className="min-h-screen bg-base-200 p-4 md:p-8 relative">
     
    <div className="w-full max-w-4xl  gap-4 mx-auto my-5" >
          <button 
          className="flex items-center space-x-2 text-xl cursor-pointer hover:text-blue-500 focus:outline-none"
          onClick={() => navigate(-1)}
        >

          <ChevronLeft className="w-5 h-5" />
          <h1 className="font-bold">Ticket Details</h1> 
        </button>
    </div>

    <div className="w-full max-w-4xl  mx-auto" >
     <div className=" bg-gray-800 flex flex-col items-center p-4 border rounded-lg shadow ">
         <div className="p-5  rounded-lg items-center">
         <img
            src={assets.TicketImage}
            // src={ticket.photo}
            alt={ticket.ticketType}
            className="w-40 h-70 sm:w-64 sm:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-112 object-cover mb-6 rounded-lg"
          />
         </div>
        
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-center">{ticket.ticketType} - {ticket.ticketRole}</h2>
          <p className="text-white text-sm sm:text-base lg:text-lg xl:text-xl text-center">Price: {ticket.price}</p>
          <p className=" text-white text-sm sm:text-base lg:text-lg xl:text-xl text-center">Dates: {ticket.date.join(", ")}</p>

          <div className="my-4 text-center">
            <label className="block text-sm sm:text-base font-bold mb-2">Quantity</label>
            <input
              type="number"
              value={ticketCount}
              onChange={(e) => setTicketCount(Number(e.target.value))}
              min="1"
              className="p-2 border rounded w-24 sm:w-32 lg:w-40 mx-auto"
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










