import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { LoginPage } from "@/pages/LoginPage";
import { DashboardPage } from "@/pages/dashboard";
import { Reports } from "@/pages/reports";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage newUser={false} />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "/news",
        element: <LoginPage newUser={true} />,
      },
      {
        path: "/rewards",
        element: <LoginPage newUser={true} />,
      },
      {
        path: "/faqs",
        element: <LoginPage newUser={true} />,
      },
      {
        path: "/settings",
        element: <LoginPage newUser={true} />,
      },
      {
        path: "/profile",
        element: <LoginPage newUser={true} />,
      },
    ],
  },
  {
    path: "/register",
    element: <LoginPage newUser={true} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
