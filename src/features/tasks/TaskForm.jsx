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
   if (error) return <p>Error loading employees</p>;

   function onSubmit(formData) {
      createTask(formData);
      reset();
   }

   return (
      <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Create New Task
         </h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* Task Name */}
            <div className="mb-4">
               <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
               >
                  Task Name
               </label>
               <input
                  type="text"
                  id="title"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter task name"
                  {...register("title", {
                     required: "Task name is required.",
                  })}
               />
               {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
               )}
            </div>

            {/* Description */}
            <div className="mb-4">
               <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
               >
                  Description
               </label>
               <textarea
                  id="description"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter task description"
                  rows="4"
                  {...register("description", {
                     required: "The task description is required.",
                  })}
               />
               {errors.description && (
                  <p className="text-red-500 text-sm">
                     {errors.description.message}
                  </p>
               )}
            </div>

            {/* Assigned User */}
            <div className="mb-4">
               <label
                  htmlFor="assigned_user"
                  className="block text-sm font-medium text-gray-700"
               >
                  Assigned Employee
               </label>
               <select
                  id="assigned_user"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                  {...register("assigned_user", {
                     required: "The assigned_user is required.",
                  })}
               >
                  {employees?.map((employee, index) => (
                     <option id={index + 1} key={index} value={employee.id}>
                        {employee.name} | {employee.email}
                     </option>
                  ))}
               </select>
               {errors.assigned_user && (
                  <p className="text-red-500 text-sm">
                     {errors.assigned_user.message}
                  </p>
               )}
            </div>

            <div className="flex gap-10 items-center">
               <div className="mb-4 w-full">
                  <label
                     htmlFor="start_date"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Start Date
                  </label>
                  <input
                     type="datetime-local"
                     id="start_date"
                     className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     {...register("start_date", {
                        required: "The start_date is required.",
                     })}
                  />
                  {errors.start_date && (
                     <p className="text-red-500 text-sm">
                        {errors.start_date.message}
                     </p>
                  )}
               </div>
               <div className="mb-4 w-full">
                  <label
                     htmlFor="due_date"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Due Date
                  </label>
                  <input
                     type="datetime-local"
                     id="due_date"
                     className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     {...register("due_date", {
                        required: "The due_date is required.",
                     })}
                  />
                  {errors.due_date && (
                     <p className="text-red-500 text-sm">
                        {errors.due_date.message}
                     </p>
                  )}
               </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
               <button
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
               >
                  Create Task
               </button>
            </div>
         </form>
      </div>
   );
};

export default TaskForm;
