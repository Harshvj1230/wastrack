import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { LoginPage } from "@/pages/LoginPage.tsx";
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
  },
  {
    path: "/register",
    element: <LoginPage newUser={true} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
