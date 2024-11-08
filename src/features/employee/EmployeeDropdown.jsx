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

   if (isLoading) return <p>Loading...</p>;
   if (error) return <p>Error loading employees</p>;

   return (
      <div>
         <select defaultValue="" onChange={handleChange}>
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
