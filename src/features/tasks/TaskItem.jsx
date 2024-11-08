import { useState } from "react";

function TaskItem({ task }) {
   const { title, description, start_date, due_date } = task;

   const [isExpanded, setIsExpanded] = useState(false);

   const toggleExpand = () => setIsExpanded(!isExpanded);

   return (
      <div
         onClick={toggleExpand}
         className="p-4 mb-4 bg-gray-100 rounded-lg shadow cursor-pointer hover:bg-gray-200 transition"
      >
         <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <span className="text-gray-500">{isExpanded ? "👆" : "👇"}</span>
         </div>

         {isExpanded && (
            <div className="mt-2 text-gray-700">
               <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {description}
               </p>
               <p>
                  <span className="font-semibold">Start Date:</span>{" "}
                  {start_date}
               </p>
               <p>
                  <span className="font-semibold">Due Date:</span> {due_date}
               </p>
            </div>
         )}
      </div>
   );
}

export default TaskItem;
