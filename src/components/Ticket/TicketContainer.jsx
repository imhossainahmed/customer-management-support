import { use } from 'react';
import TicketCard from './TicketCard';

const TicketContainer = ({getTicket, handleTaskStatus}) => {
  const ticket = use(getTicket);
  return (
    <div className="lg:col-span-3">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ticket.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} handleTaskStatus={handleTaskStatus} />)}
    </div>
  </div>
  );
};

export default TicketContainer;