import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ticketDetailData } from "../../api/apiDemoData";

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
    <div className="min-h-screen bg-base-200 p-4 md:p-6 flex items-center justify-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gray-200 text-black py-2 px-4 rounded hover:bg-primary-focus"
      >
        Back
      </button>

      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">Ticket Detail</h1>

        <div className="flex flex-col items-center p-16 border rounded shadow">
          <img
            src={ticket.photo}
            alt={ticket.ticketType}
            className="w-50 h-56 sm:w-64 sm:h-80 lg:w-80 lg:h-96 xl:w-96 xl:h-112 object-cover mb-6 rounded-lg"
          />
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-center">{ticket.ticketType} - {ticket.ticketRole}</h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-center">Price: {ticket.price}</p>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-center">Dates: {ticket.date.join(", ")}</p>

          <div className="my-4 text-center">
            <label className="block text-sm sm:text-base font-bold mb-2">Quantity</label>
            <div className="flex items-center justify-center">
              <button
                onClick={decrementCount}
                className="bg-gray-200 text-black py-1 px-3 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="mx-4 text-lg font-bold">{ticketCount}</span>
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
          <div className="modal-box ">
            <h3 className="font-bold text-center text-lg">Confirm Your Purchase</h3>
            <div className="flex flex-col items-center space-y-2">
              <p className="py-2 text-center">
                Ticket:<span className="font-bold"> {ticket.ticketType} - {ticket.ticketRole}</span>
              </p>
              <p className="py-2 text-center">
                Price per Ticket:<span className="font-bold"> {ticket.price}</span>
              </p>
              <p className="py-2 text-center">
                Quantity:<span className="font-bold"> {ticketCount}</span>
              </p>
              <p className="py-2 text-center">
                Total Amount:<span className="font-bold">{ticket.price * ticketCount}</span> 
              </p>
            </div>

            <div className="modal-action flex justify-center space-x-4">
              <button
                onClick={closeModal}
                className="btn btn-outline btn-error w-32 text-center"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="btn btn-primary w-32 text-center"
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







