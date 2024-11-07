import React from "react";
import { useEmployees } from "../users/useEmployees";
import { useForm } from "react-hook-form";

const TaskForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   const { users: employees, isLoading, error } = useEmployees();
   if (isLoading) return <p>Loading...</p>;
   if (error) return <p>Error loading employees</p>;

   function onSubmit() {}

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
               />
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
               >
                  {employees?.map((employee, index) => (
                     <option id={index + 1} key={index}>
                        {employee.name} | {employee.email}
                     </option>
                  ))}
               </select>
            </div>

            {/* Due Date */}
            <div className="mb-4">
               <label
                  htmlFor="due_date"
                  className="block text-sm font-medium text-gray-700"
               >
                  Due Date
               </label>
               <input
                  type="date"
                  id="due_date"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               />
            </div>

            {/* Priority */}
            <div className="mb-4">
               <label
                  htmlFor="priority"
                  className="block text-sm font-medium text-gray-700"
               >
                  Priority
               </label>
               <select
                  id="priority"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
               </select>
            </div>

            {/* Status */}
            <div className="mb-4">
               <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
               >
                  Status
               </label>
               <select
                  id="status"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               >
                  <option value="">Select Status</option>
                  <option value="not_started">Not Started</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
               </select>
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
