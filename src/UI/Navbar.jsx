import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="bg-blue-600 p-4 text-white">
         <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
               SchedulerApp
            </Link>
            <div className="space-x-4">
               <Link to="/dashboard" className="hover:text-gray-300">
                  Dashboard
               </Link>
               <Link to="/employee" className="hover:text-gray-300">
                  Employee
               </Link>
               <Link to="/manager" className="hover:text-gray-300">
                  Manager
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
