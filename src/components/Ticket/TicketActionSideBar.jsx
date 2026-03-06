
const TicketActionSideBar = ({ taskStatus, resolvedTasks, handleComplete }) => {
  return (
    <div className="lg:col-span-1 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Task Status</h2>
        <div className="bg-white rounded-xl border p-4 min-h-25">
          {taskStatus.length === 0 ? (
            <p className="text-gray-400 text-sm italic">Select a ticket to add to Task Status</p>
          ) : (
            <div className="space-y-3">
              {taskStatus.map((ticket) => (
                <div key={ticket.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="text-sm font-bold text-gray-700 mb-2">{ticket.title}</p>
                  <button 
                    onClick={() => handleComplete(ticket)}
                    className="w-full bg-purple-600 text-white text-xs font-bold py-2 rounded-md hover:bg-purple-700 transition"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Resolved Task</h2>
        <div className="bg-white rounded-xl border p-4 min-h-25">
          {resolvedTasks.length === 0 ? (
            <p className="text-gray-400 text-sm italic">No resolved tasks yet.</p>
          ) : (
            <ul className="space-y-2">
              {resolvedTasks.map(ticket => (
                <li key={ticket.id} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {ticket.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketActionSideBar;