// src/pages/EmployeeDashboard.js
const EmployeeDashboard = () => {
   return (
      <div>
         <h1 className="text-2xl font-bold text-green-600">
            Employee Dashboard
         </h1>
         <p className="mt-4 text-gray-700">Here are your assigned tasks:</p>
         {/* Placeholder for task list */}
         <ul className="mt-4 bg-white p-4 rounded shadow">
            <li className="py-2 border-b">Task 1: Complete code review</li>
            <li className="py-2 border-b">Task 2: Attend team meeting</li>
            <li className="py-2">Task 3: Update project documentation</li>
         </ul>
      </div>
   );
};

export default EmployeeDashboard;
