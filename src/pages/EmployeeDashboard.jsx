import { useState, useMemo } from "react";
import EmployeeDropdown from "../features/employee/EmployeeDropdown";
import { useTasks } from "../features/tasks/useTasks";
import { toast } from "react-hot-toast";
import TaskItem from "../features/tasks/TaskItem";
import Spinner from "../UI/Spinner";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";
import "../features/employee/CalendarStyles.css";

const locales = {
   "en-US": enUS,
};

const localizer = dateFnsLocalizer({
   format,
   parse,
   startOfWeek,
   getDay,
   locales,
});

const EmployeeDashboard = () => {
   const [selectedEmployee, setSelectedEmployee] = useState();
   const { tasks, isLoading, error } = useTasks(selectedEmployee?.id);

   if (error) {
      toast.error("Failed to load tasks. Please try again later. " + error);
   }

   // Transform tasks into events for react-big-calendar
   const events = useMemo(() => {
      return tasks?.map((task) => ({
         title: task.title,
         start: new Date(task.start_date),
         end: new Date(task.due_date),
      }));
   }, [tasks]);

   return (
      <div className="p-6 bg-gray-50 min-h-screen rounded-3xl">
         <h1 className="text-3xl font-semibold text-green-600 mb-4 text-center">
            Employee Dashboard
         </h1>
         <div className="max-w-md mx-auto">
            <h2 className="text-lg text-gray-800 mb-2 text-center">
               Please select an employee:
            </h2>
            <EmployeeDropdown setSelectedEmployee={setSelectedEmployee} />
         </div>

         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Task List */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
               <p className="text-gray-700 font-medium">Assigned tasks:</p>
               {isLoading ? (
                  <Spinner />
               ) : tasks?.length ? (
                  <ul className="mt-4 space-y-3">
                     {tasks.map((task, index) => (
                        <TaskItem task={task} key={index} />
                     ))}
                  </ul>
               ) : (
                  <p className="text-gray-500 italic mt-4">
                     You currently have no tasks! Hurray!
                  </p>
               )}
            </div>

            {/* Right Column: Calendar */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
               <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  className="rounded-lg"
               />
            </div>
         </div>
      </div>
   );
};

export default EmployeeDashboard;
