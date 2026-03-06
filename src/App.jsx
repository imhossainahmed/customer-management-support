import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, User, Mail, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import './App.css';

const App = () => {
 
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ToastContainer position="top-right" autoClose={3000} />

      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-gray-800">CS — Ticket System</h1>
        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">FAQ</a>
          <a href="#" className="hover:text-purple-600">Changelog</a>
          <a href="#" className="hover:text-purple-600">Blog</a>
          <a href="#" className="hover:text-purple-600">Download</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
            <span>+</span> New Ticket
          </button>
        </div>
      </nav>
ç
      <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">CS — Ticket System</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Products & Services</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Information</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2025 CS — Ticket System. All rights reserved.</p>
          <div className="flex gap-6 text-gray-400">
            <Twitter size={20} className="hover:text-white cursor-pointer" />
            <Linkedin size={20} className="hover:text-white cursor-pointer" />
            <MessageSquare size={20} className="hover:text-white cursor-pointer" />
            <Mail size={20} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App
