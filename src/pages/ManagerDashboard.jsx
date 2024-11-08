import TaskForm from "../features/tasks/TaskForm";

const ManagerDashboard = () => {
   return (
      <div className="p-6 bg-gray-50 min-h-screen rounded-3xl">
         <h1 className="text-3xl font-semibold text-purple-600 text-center mb-4">
            Manager Dashboard
         </h1>
         <p className="text-lg text-gray-700 text-center mb-6">
            Assign tasks to employees and manage their workload:
         </p>
         <div className=" mx-autop-6 g">
            <TaskForm />
         </div>
      </div>
   );
};

export default ManagerDashboard;
