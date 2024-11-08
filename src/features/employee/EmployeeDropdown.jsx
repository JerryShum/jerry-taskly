import { useQueryClient } from "@tanstack/react-query";
import { useEmployees } from "../users/useEmployees";

function EmployeeDropdown({ setSelectedEmployee }) {
   const queryClient = useQueryClient();
   const { users, isLoading, error } = useEmployees();

   function handleChange(event) {
      const selectedEmployee = users.find(
         (employee) => employee.id === Number(event.target.value)
      );
      setSelectedEmployee(selectedEmployee);
      queryClient.invalidateQueries(["tasks", selectedEmployee.id]); // Optionally invalidate to fetch new tasks
   }

   if (isLoading) return <p className="text-gray-500">Loading employees...</p>;
   if (error) return <p className="text-red-500">Error loading employees</p>;

   return (
      <div className="mt-4">
         <select
            defaultValue=""
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
         >
            <option value="" disabled>
               Select an employee
            </option>
            {users?.map((employee) => (
               <option key={employee.id} value={employee.id}>
                  {employee.name} | {employee.email}
               </option>
            ))}
         </select>
      </div>
   );
}

export default EmployeeDropdown;
