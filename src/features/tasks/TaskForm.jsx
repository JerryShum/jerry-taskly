import React from "react";
import Spinner from "../../UI/Spinner";
import { useEmployees } from "../users/useEmployees";
import { useForm } from "react-hook-form";
import { useCreateTask } from "./useCreateTask";

const TaskForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const { users: employees, isLoading, error } = useEmployees();
   const { createTask, isCreating } = useCreateTask();

   if (isLoading || isCreating) return <Spinner />;
   if (error) return <p className="text-red-500">Error loading employees</p>;

   function onSubmit(formData) {
      createTask(formData);
      reset();
   }

   return (
      <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
         <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Create New Task
         </h2>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Task Name */}
            <div>
               <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-600"
               >
                  Task Name
               </label>
               <input
                  type="text"
                  id="title"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter task name"
                  {...register("title", {
                     required: "Task name is required.",
                  })}
               />
               {errors.title && (
                  <p className="text-red-500 text-xs mt-1">
                     {errors.title.message}
                  </p>
               )}
            </div>

            {/* Description */}
            <div>
               <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-600"
               >
                  Description
               </label>
               <textarea
                  id="description"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter task description"
                  rows="3"
                  {...register("description", {
                     required: "The task description is required.",
                  })}
               />
               {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                     {errors.description.message}
                  </p>
               )}
            </div>

            {/* Assigned User */}
            <div>
               <label
                  htmlFor="assigned_user"
                  className="block text-sm font-medium text-gray-600"
               >
                  Assigned Employee
               </label>
               <select
                  id="assigned_user"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                  disabled={isLoading}
                  {...register("assigned_user", {
                     required: "The assigned employee is required.",
                  })}
               >
                  <option value="" disabled>
                     Select an employee
                  </option>
                  {employees?.map((employee) => (
                     <option key={employee.id} value={employee.id}>
                        {employee.name} | {employee.email}
                     </option>
                  ))}
               </select>
               {errors.assigned_user && (
                  <p className="text-red-500 text-xs mt-1">
                     {errors.assigned_user.message}
                  </p>
               )}
            </div>

            <div className="grid grid-cols-2 gap-10">
               {/* Start Date */}
               <div className="w-full">
                  <label
                     htmlFor="start_date"
                     className="block text-sm font-medium text-gray-600"
                  >
                     Start Date
                  </label>
                  <input
                     type="datetime-local"
                     id="start_date"
                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                     {...register("start_date", {
                        required: "The start date is required.",
                     })}
                  />
                  {errors.start_date && (
                     <p className="text-red-500 text-xs mt-1">
                        {errors.start_date.message}
                     </p>
                  )}
               </div>

               {/* Due Date */}
               <div className="w-full">
                  <label
                     htmlFor="due_date"
                     className="block text-sm font-medium text-gray-600"
                  >
                     Due Date
                  </label>
                  <input
                     type="datetime-local"
                     id="due_date"
                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                     {...register("due_date", {
                        required: "The due date is required.",
                     })}
                  />
                  {errors.due_date && (
                     <p className="text-red-500 text-xs mt-1">
                        {errors.due_date.message}
                     </p>
                  )}
               </div>
            </div>

            {/* Submit Button */}
            <button
               type="submit"
               className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
               Create Task
            </button>
         </form>
      </div>
   );
};

export default TaskForm;
