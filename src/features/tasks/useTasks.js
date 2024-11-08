import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../api/apiTasks";

export function useTasks(employeeId) {
   const {
      data: tasks,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["tasks", employeeId], // Use an array to include dynamic parts of the query key
      queryFn: () => getTasks(employeeId), // Pass employeeId to your API function
      enabled: !!employeeId, // Only fetch tasks if an employeeId is provided
   });

   return { tasks, isLoading, error };
}
