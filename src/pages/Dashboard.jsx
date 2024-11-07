// src/pages/Dashboard.js
import { Link } from "react-router-dom";

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
      </div>
   );
};

export default Dashboard;
