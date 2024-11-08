import { Link } from "react-router-dom";

// src/pages/Home.js
const Home = () => {
   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
         <h1 className="text-5xl font-semibold text-gray-800">
            Welcome to <span className="text-blue-600">Taskly</span>
         </h1>
         <p className="mt-4 text-md text-gray-600 max-w-md">
            Effortlessly manage your team’s tasks and boost productivity.
         </p>
         <div className="mt-8">
            <Link
               to="/dashboard"
               className="bg-blue-600 text-white py-2.5 px-6 rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out duration-200"
            >
               Go to Dashboard
            </Link>
         </div>
      </div>
   );
};

export default Home;
