import React from 'react';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6"><span className='text-indigo-500'>CMS</span> — Ticket System</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Centralized ticket support system to organize customer requests, monitor progress, assign responsibilities, and resolve issues quickly while ensuring smooth communication between support teams and customers.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-indigo-500">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-500">Our Mission</a></li>
              <li><a href="#" className="hover:text-indigo-500">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-indigo-500">Products & Services</a></li>
              <li><a href="#" className="hover:text-indigo-500">Customer Stories</a></li>
              <li><a href="#" className="hover:text-indigo-500">Download Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Information</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-indigo-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-indigo-500">Join Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Social Link</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-indigo-500 flex items-center gap-2"><Twitter size={20} className="hover:text-white cursor-pointer" /><span>@CMS — Ticket System</span></a></li>
              <li><a href="#" className="hover:text-indigo-500 flex items-center gap-2"><Linkedin size={20} className="hover:text-white cursor-pointer" /><span>@CMS — Ticket System</span></a></li>
              <li><a href="#" className="hover:text-indigo-500 flex items-center gap-2"><Mail size={20} className="hover:text-white cursor-pointer" /><span>@CMS — Ticket System</span></a></li>
              <li><a href="#" className='hover:text-indigo-500 flex items-center gap-2'><Facebook size={20} className="hover:text-white cursor-pointer" /><span>@CMS — Ticket System</span></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© <span className="text-indigo-500">2026</span> CMS — Ticket System. All rights reserved.</p>
        </div>
      </footer>
        </div>
    );
};

export default Footer;