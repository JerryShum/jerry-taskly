import { useState } from "react";
import EmployeeDropdown from "../features/employee/EmployeeDropdown";
import { useTasks } from "../features/tasks/useTasks";
import { toast } from "react-hot-toast";
import TaskItem from "../features/tasks/TaskItem";
import Spinner from "../UI/Spinner";

const EmployeeDashboard = () => {
   const [selectedEmployee, setSelectedEmployee] = useState(null);
   const { tasks, isLoading, error } = useTasks(selectedEmployee?.id);

   if (error) {
      toast.error("Failed to load tasks. Please try again later. " + error);
   }

   return (
      <div>
         <h1 className="text-2xl font-bold text-green-600">
            Employee Dashboard
         </h1>
         <h2>Please select an employee:</h2>
         <EmployeeDropdown setSelectedEmployee={setSelectedEmployee} />

         {isLoading && <Spinner />}
         {tasks && (
            <>
               <p className="mt-4 text-gray-700">
                  Here are your assigned tasks:
               </p>
               <ul className="mt-4 bg-white p-4 rounded shadow">
                  {tasks?.map((task, index) => (
                     <TaskItem task={task} key={index} />
                  ))}
                  {tasks?.length < 1 && (
                     <li>You currently have no tasks! Hurray!</li>
                  )}
               </ul>
            </>
         )}
      </div>
   );
};

export default EmployeeDashboard;
