import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, User, Mail, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import StatusBanner from './components/StausBanner/StatusBanner';

const App = () => {
 
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ToastContainer position="right-bottom" autoClose={3000} />
      <NavBar />
      <StatusBanner taskStatus={[1, 2, 3]} resolvedTasks={[4, 5]} />
      <Footer />
    </div>
  );
};

export default App
