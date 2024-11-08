import { Link } from "react-router-dom";
import { useEmployees } from "../features/users/useEmployees";

const Dashboard = () => {
   const { users, isLoading, error } = useEmployees();

   return (
      <div className="text-center py-10 px-4  min-h-screen">
         <h1 className="text-4xl font-semibold text-blue-600">Dashboard</h1>
         <p className="mt-2 text-lg text-gray-600">
            Select your dashboard view:
         </p>

         <div className="mt-8 flex space-x-4 justify-center">
            <Link
               to="/employee"
               className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-400 transition ease-in-out duration-200"
            >
               Employee Dashboard
            </Link>
            <Link
               to="/manager"
               className="bg-purple-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-400 transition ease-in-out duration-200"
            >
               Manager Dashboard
            </Link>
         </div>

         <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
               {isLoading ? (
                  <p className="text-gray-500">Loading users...</p>
               ) : error ? (
                  <p className="text-red-500">Error loading users.</p>
               ) : (
                  <ul className="space-y-3">
                     {users?.map((user) => (
                        <li
                           key={user.id}
                           className="py-2 border-b border-gray-200"
                        >
                           <span className="font-medium text-gray-700">
                              {user.name}
                           </span>
                           <span className="text-sm text-gray-500">
                              {" "}
                              - {user.role}
                           </span>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
