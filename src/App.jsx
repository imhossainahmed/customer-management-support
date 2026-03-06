import { use, useState } from 'react'
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
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const getAllTicket = use(getTickets);
  const totalTaskInProgress = () => {
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

  // REMOVE TASK FROM TASK STATUS 
  const handleRemoveFromTaskStatus = (ticket) => {
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    setAvailableTickets([...availableTickets, ticket]);
  };

  const handleComplete = (ticket) => {
    setResolvedTasksToLocalStorage([...getResolvedTasksFromLocalStorage(), ticket]);
    setResolvedTasks([...getResolvedTasksFromLocalStorage(), ticket]);
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    toast.success("Task marked as completed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <NavBar />
      <StatusBanner totalTaskInProgress={totalTaskInProgress()} resolvedTasks={4} />
      <main className="px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 container mx-auto">
          <TicketContainer getTicket={getTickets} handleTaskStatus={handleTaskStatus} />
          <TicketActionSideBar handleRemoveFromTaskStatus={handleRemoveFromTaskStatus} taskStatus={taskStatus} resolvedTasks={resolvedTasks} handleComplete={handleComplete} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App
