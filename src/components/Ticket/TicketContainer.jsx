import { use } from 'react';
import TicketCard from './TicketCard';
import { getResolvedTasksFromLocalStorage } from '../../utils/LocalStorage';

const TicketContainer = ({getTicket, handleTaskStatus}) => {
  const ticket = use(getTicket);
  const resolvedTickets = getResolvedTasksFromLocalStorage();
  const getAvailableTickets = () => {
    if (resolvedTickets.length === 0) return ticket;
    const resolvedTicketIds = resolvedTickets.map(t => t.id);
    return ticket.filter(t => !resolvedTicketIds.includes(t.id));
  }
  return (
    <div className="lg:col-span-3">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Tickets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {getAvailableTickets().map((ticket) => <TicketCard key={ticket.id} ticket={ticket} handleTaskStatus={handleTaskStatus} />)}
    </div>
  </div>
  );
};

export default TicketContainer;