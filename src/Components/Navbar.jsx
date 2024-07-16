import React from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({handleDashboard,dashboard}) => {
const user = JSON.parse(localStorage.getItem('user'));
console.log(user);
  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center justify-between">
          <div className=' flex md:hidden items-center justify-center'>
          {
          dashboard? <FaBars onClick={()=>handleDashboard()} size={20} />:<RxCross2 onClick={()=>handleDashboard()} size={20} />
          }
         
          
          </div>
            <div>
            <h2 className=' text-green-500 text-2xl font-bold'>QuickCash</h2>
            </div>
          </div>

          {/* Navbar links */}
          <div className=" flex ">
            <div className="flex items-center ">
              <button className=" mx-4 text-gray-600 transition-colors duration-300 transform block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div title={`${user?.email}`} className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
