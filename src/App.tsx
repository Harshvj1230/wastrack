import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/custom/modeToggle";
import Header from "@/components/elements/header";
import Sidebar from "./components/elements/sidebar";
import Navbar from "./components/elements/navbar";
import { DashboardPage } from "@/pages/dashboard";
import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const requestNotificationPermission = () => {
      if ("Notification" in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("Notification permission granted.");
          } else {
            console.log("Notification permission denied.");
          }
        });
      } else {
        console.log("This browser does not support notifications.");
      }
    };

    requestNotificationPermission();
  }, []);

  // Function to send a notification
  const sendNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Water Alert!", {
        body: "👋 Hey, water is being wasted! Kindly use it consciously",
        icon: "https://raw.githubusercontent.com/ForLoopCodes/wastrack/refs/heads/master/logo.png", // Optional icon
      });
    } else {
      console.log("Notification permission not granted or not supported.");
    }
  };
  sendNotification();
  return (
    <div className="w-screen h-screen m-0 md:pl-40 px-6 pt-14 bg-custom text-neutral-200">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Header />
        <Sidebar />
        <Navbar />
        <div className="m-0 p-0 md:pl-40 pt-10 bg-custom text-neutral-200 h-full">
          <Outlet />
          <div className="h-24"></div>
        </div>
      </ThemeProvider>
    </div>
  );
}
