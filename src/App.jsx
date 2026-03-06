import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, User, Mail, Linkedin, Twitter, MessageSquare, Ticket } from 'lucide-react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import StatusBanner from './components/StausBanner/StatusBanner';
import TicketContainer from './components/Ticket/TicketContainer';
import TicketActionSideBar from './components/Ticket/TicketActionSideBar';

const getTickets = fetch('/ticket.json').then(res => res.json());

const App = () => {
  const [availableTickets, setAvailableTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const addToTaskStatus = (ticket) => {
    if (taskStatus.find(t => t.id === ticket.id)) {
      toast.error("This ticket is already in Task Status!");
      return;
    }
    setTaskStatus([...taskStatus, ticket]);
    setAvailableTickets(availableTickets.filter(t => t.id !== ticket.id));
  };

  const handleComplete = (ticket) => {
    setResolvedTasks([...resolvedTasks, ticket]);
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    toast.success("Task marked as completed!");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ToastContainer position="right-bottom" autoClose={3000} />
      <NavBar />
      <StatusBanner taskInProgress={2} resolvedTasks={4} />
      <main className="px-6 md:px-10 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <TicketContainer getTicket={getTickets} addToTaskStatus={addToTaskStatus} />
        <TicketActionSideBar taskStatus={taskStatus} resolvedTasks={resolvedTasks} handleComplete={handleComplete} />
      </main>
      <Footer />
    </div>
  );
};

export default App
