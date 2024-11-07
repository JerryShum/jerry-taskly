// src/App.js
import {
   BrowserRouter as Router,
   Routes,
   Route,
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/EmployeeDashboard";
import Manager from "./pages/Manager";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      element: <AppLayout />, // Shared layout for these nested routes
      children: [
         {
            path: "dashboard",
            element: <Dashboard />,
         },
         {
            path: "employee",
            element: <Employee />,
         },
         {
            path: "manager",
            element: <Manager />,
         },
      ],
   },
]);

const queryClient = new QueryClient();

function App() {
   return (
      <>
         <Toaster />
         <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouterProvider router={router} />;
         </QueryClientProvider>
      </>
   );
}

export default App;
