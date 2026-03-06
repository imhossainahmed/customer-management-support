

const TicketCard = ({ ticket }) => {
    return (
    <div>
    <div className="bg-white rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-200 flex flex-col gap-3 cursor-pointer hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start gap-4">
        <h3 className="text-lg font-medium tracking-tight text-gray-900 leading-snug">{ticket.title}</h3>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium bg-[#e6f4ea] text-[#1e8e3e] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e8e3e]"></span> {ticket.status}
        </span>
    </div>
    <p className="text-base text-gray-500 leading-relaxed line-clamp-2">{ticket.description}</p>
    <div className="mt-auto pt-3 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-3">
            <span className="font-medium">#{ticket.id}</span>
            <span className="text-red-500 text-xs font-semibold tracking-wide uppercase">{ticket.priority}</span>
        </div>
        <div className="flex items-center gap-3">
            <span>{ticket.customer}</span>
            <span className="flex items-center gap-1.5"><i data-lucide="calendar" className="w-3.5 h-3.5" stroke-width="1.5"></i> {ticket.createdAt}</span>
        </div>
    </div>
    </div>
    </div>
    );
};

export default TicketCard;