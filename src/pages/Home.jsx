// src/pages/Home.js
const Home = () => {
   return (
      <div className="flex flex-col items-center justify-center h-full text-center">
         <h1 className="text-4xl font-bold text-blue-600">Welcome to Taskly</h1>
         <p className="mt-4 text-lg text-gray-700">
            Manage your team’s tasks effortlessly!
         </p>
         <div className="mt-6">
            <a
               href="/dashboard"
               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
            >
               Go to Dashboard
            </a>
         </div>
      </div>
   );
};

export default Home;
