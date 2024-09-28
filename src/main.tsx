import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { LoginPage } from "@/pages/LoginPage";
import { DashboardPage } from "@/pages/dashboard";
import { News } from "@/pages/news";
import { FaqPage } from "@/pages/faqPage";
import { Rewards } from "@/pages/rewards";
import { SettingsPage } from "@/pages/settings";
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
        element: <News />,
      },
      {
        path: "/rewards",
        element: <Rewards />,
      },
      {
        path: "/faqs",
        element: <FaqPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/profile",
        element: <LoginPage />,
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
