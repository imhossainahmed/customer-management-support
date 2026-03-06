const setResolvedTasksToLocalStorage = (tasks) => {
  localStorage.setItem('resolvedTasks', JSON.stringify(tasks));
};

const getResolvedTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('resolvedTasks');
  return tasks ? JSON.parse(tasks) : [];
};

const removeResolvedTaskFromLocalStorage = (taskId) => {
  const tasks = getResolvedTasksFromLocalStorage();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  setResolvedTasksToLocalStorage(updatedTasks);
};

export { setResolvedTasksToLocalStorage, getResolvedTasksFromLocalStorage, removeResolvedTaskFromLocalStorage };