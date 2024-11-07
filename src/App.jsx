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
import Employee from "./pages/Employee";
import Manager from "./pages/Manager";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />;
      </QueryClientProvider>
   );
}

export default App;
