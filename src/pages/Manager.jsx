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
         {/* Placeholder for task assignment form */}
         <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-800">
               Assign New Task
            </h2>
            <form className="mt-4 space-y-4">
               <div>
                  <label className="block text-gray-600">Task Title</label>
                  <input
                     type="text"
                     className="w-full p-2 border rounded"
                     placeholder="Enter task title"
                  />
               </div>
               <div>
                  <label className="block text-gray-600">Assign to</label>
                  <select className="w-full p-2 border rounded">
                     <option>Select Employee</option>
                     <option>Employee 1</option>
                     <option>Employee 2</option>
                  </select>
               </div>
               <div>
                  <button
                     type="submit"
                     className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400"
                  >
                     Assign Task
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default ManagerDashboard;
