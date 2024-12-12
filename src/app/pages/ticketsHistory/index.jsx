import React from "react";
import { ticketHistoryData } from "../../api/apiDemoData";

const TicketHistory = () => {
  return (
    <div className="min-h-screen mx-auto p-4 bg-base-200">
    <h1 className="text-5xl font-bold text-center mb-8">Ticket History</h1>
    <div className="container mx-auto p-4 bg-base-200">
      {ticketHistoryData.festivalList.map((festival, festivalIndex) => (
        <div key={festivalIndex} className="mb-8">
          {/* Festival Name */}
          <h2 className="text-3xl font-semibold mb-4">{festival.festival}</h2>
          
          {/* Tickets */}
          {festival.ticketList.map((ticket, ticketIndex) => (
            <div
              key={ticketIndex}
              className="card bg-base-100 shadow-lg p-6 mb-6"
            >
              <h3 className="text-xl font-bold mb-2">Ticket Details</h3>
              <p className="mb-2">
                <span className="font-medium">Serial Number:</span>{" "}
                {ticket.serialNumber}
              </p>
              <p className="mb-2">
                <span className="font-medium">Location:</span> {ticket.Location}
              </p>
              <p className="mb-2">
                <span className="font-medium">Date:</span>{" "}
                {ticket.date.join(", ")}
              </p>
              <p className="mb-2">
                <span className="font-medium">Time:</span> {ticket.time}
              </p>
              <p className="mb-2">
                <span className="font-medium">Bought Date:</span> {ticket["Bought Date"]}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">QR Code:</span> {ticket.qr}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};

export default TicketHistory;
