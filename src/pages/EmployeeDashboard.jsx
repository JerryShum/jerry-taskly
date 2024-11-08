import { useState } from "react";
import EmployeeDropdown from "../features/employee/EmployeeDropdown";
import { useTasks } from "../features/tasks/useTasks";
import { toast } from "react-hot-toast";
import TaskItem from "../features/tasks/TaskItem";
import Spinner from "../UI/Spinner";

const EmployeeDashboard = () => {
   const [selectedEmployee, setSelectedEmployee] = useState();
   const { tasks, isLoading, error } = useTasks(selectedEmployee?.id);

   if (error) {
      toast.error("Failed to load tasks. Please try again later. " + error);
   }

   return (
      <div className="p-6 bg-gray-50 min-h-screen rounded-3xl">
         <h1 className="text-3xl font-semibold text-green-600 mb-4 text-center">
            Employee Dashboard
         </h1>
         <div className="max-w-md mx-auto">
            <h2 className="text-lg text-gray-800 mb-2 text-center">
               Please select an employee:
            </h2>
            <EmployeeDropdown setSelectedEmployee={setSelectedEmployee} />
         </div>

         <div className="mt-8 max-w-lg mx-auto">
            {isLoading && <Spinner />}
            {tasks && (
               <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
                  <p className="text-gray-700 font-medium">Assigned tasks:</p>
                  <ul className="mt-4 space-y-3">
                     {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                           <TaskItem task={task} key={index} />
                        ))
                     ) : (
                        <li className="text-gray-500 italic">
                           You currently have no tasks! Hurray!
                        </li>
                     )}
                  </ul>
               </div>
            )}
         </div>
      </div>
   );
};

export default EmployeeDashboard;
