import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask as createTaskAPI } from "../../api/apiTasks";
import toast from "react-hot-toast";

export function useCreateTask() {
   const queryClient = useQueryClient();

   const { mutate: createTask, isLoading: isCreating } = useMutation({
      mutationFn: createTaskAPI,
      onSuccess: () => {
         toast.success("New task successfully created.");
         queryClient.invalidateQueries({
            queryKey: "tasks",
         });
      },
      onError: (error) => toast.error(error.message),
   });

   return { createTask, isCreating };
}
