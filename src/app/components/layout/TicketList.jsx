import React from "react";
import TicketCard from "../ui/TicketCard";

const TicketList = () => {
  const ticketsList = [
    {
      id: 1,
      name: "NYER GA Ticket",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Nyer VIP Ticket",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Nyer VIP Ticket",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Nyer VIP Ticket",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Nyer VIP Ticket",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Nyer VIP Ticket",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Nyer VIP Ticket",
      photo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {ticketsList.map((ticket) => (
        <TicketCard key={ticket.id} name={ticket.name} photo={ticket.photo} />
      ))}
    </div>
  );
};

export default TicketList;
