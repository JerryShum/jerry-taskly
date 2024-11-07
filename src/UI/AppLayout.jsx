import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
   return (
      <div className="min-h-screen bg-gray-100">
         <Navbar />
         <main className="container mx-auto p-6">
            <Outlet />
         </main>
      </div>
   );
};

export default AppLayout;
