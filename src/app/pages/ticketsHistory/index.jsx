import React from "react";
import { ticketHistoryData } from "../../api/apiDemoData";
import QRCode from "react-qr-code"; // Import react-qr-code library

const TicketHistory = () => {
  return (
    <div className="min-h-screen mx-auto p-4 bg-base-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Ticket History</h1>

      {/* Advertisement Placeholder */}
      {/* <div className="mb-8 flex justify-center">
        <img
          src="https://via.placeholder.com/150" // Replace with actual ad image
          alt="Advertisement"
          className="w-1/2 max-w-xs"
        />
      </div> */}

      <div className="container mx-auto p-4 bg-base-200">
        {ticketHistoryData.festivalList.map((festival, festivalIndex) => (
          <div key={festivalIndex} className="mb-8">
            {/* Festival Name */}
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">{festival.festival}</h2>

            {/* Tickets */}
            {festival.ticketList.map((ticket, ticketIndex) => (
              <div
                key={ticketIndex}
                className="card bg-base-100 shadow-lg p-6 mb-6 max-w-lg mx-auto"
              >
                <h3 className="text-xl font-bold mb-4 text-center">Ticket Details</h3>

                <div className="flex flex-col p-8 items-center space-y-4">
                  <div className="flex w-full justify-between text-sm sm:text-base">
                    <div className="font-semibold"><span>Serial Number</span></div>
                    <div className="w-1/2">:{ticket.serialNumber}</div>
                  </div>

                  <div className="flex w-full justify-between text-sm sm:text-base">
                    <div className="font-semibold"><span>Location</span></div>
                    <div className="w-1/2">:{ticket.Location}</div>
                  </div>

                  <div className="flex w-full justify-between text-sm sm:text-base">
                    <div className="font-semibold"><span>Date</span></div>
                    <div className="w-1/2">:{ticket.date.join(", ")}</div>
                  </div>

                  <div className="flex w-full justify-between text-sm sm:text-base">
                    <div className="font-semibold"><span>Time</span></div>
                    <div className="w-1/2">:{ticket.time}</div>
                  </div>

                  <div className="flex w-full justify-between text-sm sm:text-base">
                    <div className="font-semibold"><span>Bought Date</span></div>
                    <div className="w-1/2">:{ticket["Bought Date"]}</div>
                  </div>
                </div>
                
                {/* QR Code */}
                <div className="mt-4">
                  <span className="font-medium text-sm sm:text-base flex justify-center">QR Code:</span>
                  <div className="flex justify-center">
                    <QRCode value={ticket.qr} size={128} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketHistory;



