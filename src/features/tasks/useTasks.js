import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../api/apiTasks";

export function useTasks(userID) {
   const {
      data: tasks,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["tasks", userID],
      queryFn: () => getTasks(userID),
   });

   return { tasks, isLoading, error };
}
