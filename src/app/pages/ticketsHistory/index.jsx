import React, { useRef } from "react";
import { ticketHistoryData } from "../../api/apiDemoData";
import QRCode from "react-qr-code"; // Import react-qr-code library
import { toPng } from "html-to-image";

const TicketHistory = () => {
  const ticketRefs = useRef([]);

  const handleDownloadTicket = async (index) => {
    if (ticketRefs.current[index]) {
      try {
        const dataUrl = await toPng(ticketRefs.current[index]);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `ticket-${index + 1}.png`;
        link.click();
      } catch (error) {
        console.error("Failed to generate image for ticket", error);
      }
    }
  };

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
              <>
              {/* <======Download start====> */}
              <div className="flex justify-center mb-8">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDownloadTicket(ticketIndex)}
                      >
                        Download Ticket
                      </button>
                    </div>
                {/* <======Download end======> */}
               <div 
               ref={(el) => (ticketRefs.current[ticketIndex] = el)}> 
               {/* <=====Main=====> */}
              <div
                key={ticketIndex}
                className="card bg-base-100 shadow-lg p-6 mb-2 max-w-lg mx-auto"
              >
                <h3 className="text-xl font-bold mb-8 flex justify-center">Ticket Details</h3>
              
                <div className="flex w-full  justify-between mt-4">
                <div className="w-2/3 font-semibold "><span>Serial Number</span></div>
                <div className="w-full break-all">:{ticket.serialNumber}</div>
               </div>

               <div className="flex w-full  justify-between mt-4">
                <div className="w-2/3  font-semibold "><span>Location</span></div>
                <div className="w-full  break-all">:{ticket.Location}</div>
               </div>

               <div className="flex w-full  justify-between mt-4">
                <div className="w-2/3  font-semibold "><span>Date</span></div>
                <div className="w-full  break-all">:{ticket.date.join(", ")}</div>
               </div>

               <div className="flex w-full  justify-between mt-4">
                <div className="w-2/3  font-semibold "><span>Time</span></div>
                <div className="w-full break-all">:{ticket.time}</div>
               </div>

               <div className="flex w-full  justify-between mt-4">
                <div className="w-2/3  font-semibold "><span>Bought Date</span></div>
                <div className="w-full  break-all">:{ticket["Bought Date"]}</div>
               </div>

                {/* <p className="mb-2 flex  justify-center">
                  <span className="font-medium">Serial Number:</span> {ticket.serialNumber}
                </p> */}
                
                {/* QR Code */}
                <div className="my-16">
                  <span className="font-medium flex justify-center">QR Code:</span>
                  <div className="flex justify-center ">
                  <div className="rounded border-2 border-white inline-block">
                  <QRCode value={ticket.qr} size={128} />
                  </div>
                  </div>
                </div>
              
              </div>
              {/* <=====Main=====> */}
              </div>
              </>

            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketHistory;
