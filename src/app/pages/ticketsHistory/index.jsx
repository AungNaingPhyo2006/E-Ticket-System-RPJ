import React, { useState, useRef } from "react";
import { ticketHistoryData } from "../../api/apiDemoData";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { ArrowDownToLine,ChevronDown, ChevronUp,} from "lucide-react"; // Icons

const TicketHistory = () => {
  const [expandedTicketIndex, setExpandedTicketIndex] = useState(null); // Tracks the expanded ticket
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

  const toggleExpandTicket = (index) => {
    setExpandedTicketIndex(expandedTicketIndex === index ? null : index); 
  };

  return (
    <div className="min-h-screen mx-auto p-4 bg-base-200">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Ticket History</h1>

      <div className="container mx-auto p-4 bg-base-200">
        {ticketHistoryData.festivalList.map((festival, festivalIndex) => (
          <div key={festivalIndex} className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">{festival.festivalName}</h2>

            {festival.purchasedList.map((purchase, purchaseIndex) => (
              <div key={purchaseIndex}>
                <div className="flex justify-center items-center mb-4">
                  <h3 className="text-xl font-bold mr-4">Purchased on: {purchase.purchasedDate}</h3>
                  <button
                    className="p-2 bg-gray-400 text-white rounded-full"
                    onClick={() => toggleExpandTicket(purchaseIndex)}
                  >
                    {expandedTicketIndex === purchaseIndex ? (
                      <ChevronDown size={24} />
                    ) : (
                      <ChevronUp size={24} />
                    )}
                  </button>
                </div>

                {expandedTicketIndex === purchaseIndex && (
                    <div className="border-2 border-gray-300 rounded-md p-4 mt-4 shadow-md">
                    {/* Ticket Details */}
                    {purchase.ticetList.map((ticket, ticketIndex) => (
                      <div key={ticketIndex}>
                        {/* Download Button */}
                        <div className="flex justify-center mt-8">
                          <button
                            className="flex items-center justify-center w-10 h-10 bg-white text-primary rounded-full shadow hover:bg-gray-100"
                            onClick={() => handleDownloadTicket(ticketIndex)}
                          >
                            <ArrowDownToLine size={24} />
                          </button>
                        </div>

                        {/* Ticket Card */}
                        <div ref={(el) => (ticketRefs.current[ticketIndex] = el)}>
                          <div className="card bg-base-100 shadow-lg p-6 mb-2 max-w-lg mx-auto">
                            <h3 className="text-xl font-bold mb-8 flex justify-center">Ticket Details</h3>

                            <div className="flex w-full justify-between mt-4">
                              <div className="w-2/3 font-semibold"><span>Serial Number</span></div>
                              <div className="w-full break-all">:{ticket.serialNumber}</div>
                            </div>

                            <div className="flex w-full justify-between mt-4">
                              <div className="w-2/3 font-semibold"><span>Location</span></div>
                              <div className="w-full break-all">:{ticket.Location}</div>
                            </div>

                            <div className="flex w-full justify-between mt-4">
                              <div className="w-2/3 font-semibold"><span>Date</span></div>
                              <div className="w-full break-all">:{ticket.date.join(", ")}</div>
                            </div>

                            <div className="flex w-full justify-between mt-4">
                              <div className="w-2/3 font-semibold"><span>Time</span></div>
                              <div className="w-full break-all">:{ticket.time}</div>
                            </div>

                            <div className="flex w-full justify-between mt-4">
                              <div className="w-2/3 font-semibold"><span>Bought Date</span></div>
                              <div className="w-full break-all">:{ticket.purchasedDate}</div>
                            </div>

                            {/* QR Code */}
                            <div className="my-16">
                              <span className="font-medium flex justify-center">QR Code:</span>
                              <div className="flex justify-center">
                                <div className="rounded border-2 border-white inline-block">
                                  <QRCode value={ticket.qr || ''} size={128} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketHistory;




