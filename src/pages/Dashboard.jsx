// src/pages/Dashboard.js
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllUsers } from "../api/apiUsers";

const Dashboard = () => {
   return (
      <div className="text-center">
         <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
         <p className="mt-4 text-gray-700">Select your dashboard view:</p>
         <div className="mt-6 flex space-x-4 justify-center">
            <Link
               to="/employee"
               className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400"
            >
               Employee Dashboard
            </Link>
            <Link
               to="/manager"
               className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400"
            >
               Manager Dashboard
            </Link>
         </div>

         <div>
            <h1 className="text-2xl font-bold">User List</h1>
            <ul className="mt-4 bg-white p-4 rounded shadow">
               {users?.map((user) => (
                  <li key={user.id} className="py-2 border-b">
                     {user.name} - {user.role}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Dashboard;
