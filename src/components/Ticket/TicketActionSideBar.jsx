

const TicketActionSideBar = ({ taskStatus, resolvedTasks, handleComplete, handleRemoveFromTaskStatus, handleRemoveFromResolvedTasks }) => {
  return (  
    <div className="lg:col-span-1 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Task Status</h2>
        {taskStatus.length === 0 ? (
          <p className="text-base text-gray-500">Select a ticket to add to Task Status</p>
        ) : (
          <div className="flex flex-col gap-2">
          {taskStatus.map(task => (
            <div key={task.id} className="bg-white relative rounded-lg p-4 shadow border border-gray-200 flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.description}</p>
              <button onClick={() => handleComplete(task)} className="btn btn-success btn-sm">Mark as Completed</button>
              <button onClick={() => handleRemoveFromTaskStatus(task)} className="btn btn-danger btn-sm">Remove from Task Status</button>
            </div>
            ))}
        </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resolved Task</h2>
        {resolvedTasks.length === 0 ? (
          <p className="text-base text-gray-500">No resolved tasks yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
          {resolvedTasks.map(task => (
            <div key={task.id} className="bg-white relative rounded-lg p-4 shadow border border-gray-200 flex flex-col gap-2">
              <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
              <button onClick={() => handleRemoveFromResolvedTasks(task)} className="btn btn-danger btn-sm">Remove from Resolved Task</button>
            </div>
            ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default TicketActionSideBar;