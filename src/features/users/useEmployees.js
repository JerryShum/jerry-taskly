import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../api/apiUsers";

export function useEmployees() {
   const {
      data: users,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["users"],
      queryFn: getEmployees,
   });

   return { users, isLoading, error };
}
