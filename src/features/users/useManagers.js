import { useQuery } from "@tanstack/react-query";
import { getManagers } from "../../api/apiUsers";

export function useManagers() {
   const {
      data: users,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["users"],
      queryFn: getManagers,
   });

   return { users, isLoading, error };
}
