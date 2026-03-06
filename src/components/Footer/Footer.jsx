import React from 'react';
import { Calendar, User, Mail, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">CMS — Ticket System</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply duprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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

export default Footer;