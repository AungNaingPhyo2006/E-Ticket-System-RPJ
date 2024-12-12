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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const selectedTicket = ticketDetailData.find((ticket) => ticket.id === parseInt(ticketId));
    setTicket(selectedTicket);
  }, [ticketId]);

  const incrementCount = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setTicketCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    alert(`Confirmed purchase of ${ticketCount} tickets for ${ticket.ticketType} - ${ticket.ticketRole}`);
    setIsModalOpen(false);
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
            <label className="block text-sm sm:text-base text-white font-bold mb-2">Quantity</label>
            <div className="flex items-center justify-center">
              <button
                onClick={decrementCount}
                className="bg-gray-200 text-black py-1 px-3 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="mx-4 text-lg text-white font-bold">{ticketCount}</span>
              <button
                onClick={incrementCount}
                className="bg-gray-200 text-black py-1 px-3 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={openModal}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-focus"
          >
            Buy Now
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-center mb-4 text-lg">Confirm Your Purchase</h3>
            <div className="flex flex-col p-8 items-center  space-y-2">
              <div className="flex w-full  justify-between">
                <div className=" font-semibold "><span>Ticket</span></div>
                <div className="w-200  w-1/2">:{ticket.ticketType} - {ticket.ticketRole}</div>
              </div>

              <div className="flex w-full  justify-between">
                <div className=" font-semibold "><span>Price per Ticket</span></div>
                <div className=" w-1/2">:{ticket.price}</div>
              </div>

              <div className="flex w-full  justify-between">
                <div className=" font-semibold "><span>Quantity</span></div>
                <div className=" w-1/2">:{ticketCount}</div>
              </div>

              <div className="flex w-full  justify-between">
                <div className=" font-semibold "><span>Total Amount:</span></div>
                <div className=" w-1/2">:{ticket.price * ticketCount}</div>
              </div>
            </div>

            <div className="modal-action flex justify-center space-x-4 mt-4">
              <button
                onClick={closeModal}
                className="btn btn-outline btn-error w-32"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="btn btn-primary w-32"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
  );
};

export default TicketDetail;







