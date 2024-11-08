import React from "react";

const Spinner = () => {
   return (
      <div className="fixed inset-0 flex justify-center items-center">
         <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping delay-200"></div>
         </div>
      </div>
   );
};

export default Spinner;
