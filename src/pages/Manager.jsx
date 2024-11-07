import TaskForm from "../features/tasks/TaskForm";

// src/pages/ManagerDashboard.js
const ManagerDashboard = () => {
   return (
      <div>
         <h1 className="text-2xl font-bold text-purple-600">
            Manager Dashboard
         </h1>
         <p className="mt-4 text-gray-700">
            Assign tasks to employees and manage their workload:
         </p>
         <div>
            <TaskForm />
         </div>
      </div>
   );
};

export default ManagerDashboard;
