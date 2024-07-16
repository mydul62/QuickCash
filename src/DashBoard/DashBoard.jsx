import {  NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { RiDashboard2Line, RiAccountBoxLine, RiTicket2Line, RiSettings2Line } from 'react-icons/ri'; 
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const DashBoard = () => {
  const [dashboard, setDashboard] = useState(true);
  const handleDashboard = () => {
    setDashboard(!dashboard);
  };
  return (
    <div className="">
    <Navbar handleDashboard={handleDashboard} dashboard={dashboard}/>
    <aside className="flex min-h-[calc(100vh-48px)] rounded-md">
      <div className={`z-50 flex flex-col lg:translate-x-0 ${dashboard ? 'translate-x-[-100%]' : 'translate-x-0'} duration-500 absolute lg:static  xs:w-[70%] overflow-y-auto mt-4 bg-white`}>
        <div className="flex">
          <div className="min-h-[calc(100vh-48px)] px-5 bg-white border-l border-r sm:w-64 w-60">
          <nav>
          < NavLink to={'/account'} end className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
            <RiDashboard2Line className="w-5 h-5" />
            <span className="mx-4 font-medium">Accounts</span>
          </ NavLink>

          < NavLink to={"/sentmoney"} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <RiAccountBoxLine className="w-5 h-5" />
            <span className="mx-4 font-medium">Sent Money</span>
          </ NavLink>

          < NavLink to={'/cashout'}  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <RiTicket2Line className="w-5 h-5" />
            <span className="mx-4 font-medium">Cash-Out</span>
          </ NavLink>

          < NavLink to={"/cashin"}  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <RiSettings2Line className="w-5 h-5" />
            <span className="mx-4 font-medium">Cash-in</span>
          </ NavLink>
          < NavLink to={'/balanceinquiry'}  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <RiSettings2Line className="w-5 h-5" />
            <span className="mx-4 font-medium">Balance Inquiry</span>
          </ NavLink>
          < NavLink to={'/transaction'}  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <RiSettings2Line className="w-5 h-5" />
            <span className="mx-4 font-medium">Transactions History</span>
          </ NavLink>
        </nav>
          </div>
        </div>
      </div>
      <div className={`h-screen flex-1  p-3 lg:p-6`}>
        <Outlet></Outlet>
      </div>
    </aside>
  </div>
  );
};

export default DashBoard;