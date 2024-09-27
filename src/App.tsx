import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/custom/modeToggle";
import Header from "@/components/elements/header";
import Sidebar from "./components/elements/sidebar";
import { DashboardPage } from "@/pages/dashboard";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen m-0 md:pl-40 px-6 pt-14 bg-custom text-neutral-200">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Header />
        <Sidebar />
        <div className="m-0 p-0 md:pl-40 pt-10 bg-custom text-neutral-200 h-full">
          <Outlet />
        </div>
      </ThemeProvider>
    </div>
  );
}
