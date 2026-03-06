
const TicketActionSideBar = ({ taskStatus, resolvedTasks, handleComplete }) => {
  return (
    <div className="lg:col-span-1 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Task Status</h2>
        <p className="text-base text-gray-500">Select a ticket to add to Task Status</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resolved Task</h2>
        <p className="text-base text-gray-500">No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TicketActionSideBar;