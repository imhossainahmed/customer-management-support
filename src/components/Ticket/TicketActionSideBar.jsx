
const TicketActionSideBar = ({ taskStatus, resolvedTasks, handleComplete }) => {
  return (  
    <div className="lg:col-span-1 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Task Status</h2>
        {taskStatus.length === 0 ? (
          <p className="text-base text-gray-500">Select a ticket to add to Task Status</p>
        ) : (
          <div className="flex flex-row gap-2">
          {taskStatus.map(task => (
            <div key={task.id} className="bg-white rounded-lg p-4 shadow border border-gray-200 flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.description}</p>
              <button onClick={() => handleComplete(task)} className="mt-auto px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">Mark as Completed</button>
            </div>
            ))}
        </div>
        )}
        
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resolved Task</h2>
        <p className="text-base text-gray-500">No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TicketActionSideBar;