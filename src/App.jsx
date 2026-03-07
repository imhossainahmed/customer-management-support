import { use, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import StatusBanner from './components/StausBanner/StatusBanner';
import TicketContainer from './components/Ticket/TicketContainer';
import TicketActionSideBar from './components/Ticket/TicketActionSideBar';
import { getResolvedTasksFromLocalStorage, setResolvedTasksToLocalStorage } from './utils/LocalStorage';

const getTickets = fetch('/ticket.json').then(res => res.json());

const App = () => {
  const [availableTickets, setAvailableTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState(getResolvedTasksFromLocalStorage());
  const getAllTicket = use(getTickets);
  const totalTotalTaskInProgress = () => {
    const total = getAllTicket.length;
    if (total === 0) return 0;
    return total - getResolvedTasksFromLocalStorage().length;
  };

  const handleTaskStatus = (ticket) => {
    if (taskStatus.find(t => t.id === ticket.id)) {
      toast.error("This ticket is already in Task Status!");
      return;
    }
    setTaskStatus([...taskStatus, ticket]);
    setAvailableTickets(availableTickets.filter(t => t.id !== ticket.id));
  };

  const handleRemoveFromTaskStatus = (ticket) => {
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    setAvailableTickets([...availableTickets, ticket]);
  };

  const handleComplete = (ticket) => {
    setResolvedTasksToLocalStorage([...getResolvedTasksFromLocalStorage(), ticket]);
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, ticket]);
    toast.success("Task marked as completed!");
  };

  const handleRemoveFromResolvedTasks = (ticket) => {
    const updatedResolvedTasks = getResolvedTasksFromLocalStorage().filter(t => t.id !== ticket.id);
    setResolvedTasksToLocalStorage(updatedResolvedTasks);
    setResolvedTasks(updatedResolvedTasks);
    toast.success("Task removed from resolved tasks!");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <NavBar />
      <StatusBanner totalTaskInProgress={totalTotalTaskInProgress()} resolvedTasks={4} />
      <main className="px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 container mx-auto">

          <TicketContainer 
          getTicket={getTickets} 
          handleTaskStatus={handleTaskStatus} />

          <TicketActionSideBar 
          taskStatus={taskStatus} 
          resolvedTasks={resolvedTasks} 
          handleComplete={handleComplete} 
          handleRemoveFromResolvedTasks={handleRemoveFromResolvedTasks}
          handleRemoveFromTaskStatus={handleRemoveFromTaskStatus} />

        </div>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default App
