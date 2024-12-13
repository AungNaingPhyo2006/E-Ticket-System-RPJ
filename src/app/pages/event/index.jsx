import React from "react";
import { useNavigate } from "react-router-dom";
import { eventList, ticketList } from "../../api/apiDemoData";
import assets from "../../assets";

const Events = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    const relatedTickets = ticketList.filter((ticket) => ticket.id === eventId);

    navigate("/ticketLists", { state: { tickets: relatedTickets } });
  };

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <h1 className="text-5xl font-bold text-center mb-8">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {eventList.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 relative w-full rounded-[10px] overflow-hidden cursor-pointer"
            onClick={() => handleEventClick(event.id)}
          >
            <img
              src={assets.EventImage}
              // src={event.photo}
              alt={event.name}
              className="w-full object-cover rounded-t-[10px]"
              style={{ height: "200px" }}
            />
            <div className="bg-gray-900 text-white p-4 rounded-b-[10px]">
              <h2 className="text-lg font-bold">{event.name}</h2>
              <p className="text-sm">{event.location}</p>
              <p className="text-sm">Start Date: {event.startDate}</p>
              <p className="text-sm">End Date: {event.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;


