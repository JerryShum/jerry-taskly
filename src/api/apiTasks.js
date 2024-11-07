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
