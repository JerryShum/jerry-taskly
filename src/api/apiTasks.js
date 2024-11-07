import { supabase } from "./supabase";

export async function createTask(taskData) {
   const { data, error } = await supabase
      .from("tasks")
      .insert([taskData])
      .select();

   if (error) {
      throw new Error(error.message);
   }
   return data;
}

export async function getTasks(employeeID) {
   let { data: tasks, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("assigned_to", employeeID);

   if (error) {
      throw new Error(error.message);
   }

   return tasks;
}
