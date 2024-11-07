import { supabase } from "./supabase";

export async function getAllUsers() {
   let { data: users, error } = await supabase.from("users").select("*");
   if (error) throw new Error(error.message);

   return users;
}

export async function getManagers() {
   let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("role", "Manager");
   if (error) throw new Error(error.message);

   return users;
}

export async function getEmployees() {
   let { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("role", "Employee");
   if (error) throw new Error(error.message);

   return users;
}
