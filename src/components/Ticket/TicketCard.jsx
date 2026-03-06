import { Calendar, User } from "lucide-react";


const TicketCard = ({ ticket, handleTaskStatus }) => {
    const {title, status, description, priority, createdAt, customer} = ticket;
    return (
    <button className="bg-white rounded-xl p-5 shadow border border-gray-200 duration-75 hover:shadow-md flex flex-col gap-3 cursor-pointer" onClick={() => handleTaskStatus(ticket)}>
    <div className="flex justify-between items-start gap-4">
        <h3 className="text-lg font-medium tracking-tight text-gray-900 leading-snug">{title}</h3>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium ${status === 'Open' ? 'text-green-700 bg-green-100' : 'text-yellow-700 bg-yellow-100'} shrink-0`}>
        <span className={`w-1.5 h-1.5 rounded-full ${status === 'Open' ? 'bg-green-700' : 'bg-yellow-700'}`}></span> {status}
        </span>
    </div>
    <p className="text-base text-gray-500 text-left leading-relaxed line-clamp-2">{description}</p>
    <div className="mt-auto pt-3 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-3">
            <span className="font-medium">#{ticket.id}</span>
            <span className="text-red-500 text-xs font-semibold tracking-wide uppercase">{priority}</span>
        </div>
        <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5"><User size={16} />{customer}</span>
            <span className="flex items-center gap-1.5"><Calendar size={16} /> {createdAt}</span>
        </div>
    </div>
    </button>
    );
};

export default TicketCard;