import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="bg-white shadow-md py-4">
         <div className="container mx-auto flex justify-between items-center px-4">
            <Link to="/" className="text-2xl font-semibold text-blue-600">
               Taskly
            </Link>
            <div className="space-x-6">
               <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
               >
                  Dashboard
               </Link>
               <Link
                  to="/employee"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
               >
                  Employee
               </Link>
               <Link
                  to="/manager"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
               >
                  Manager
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
