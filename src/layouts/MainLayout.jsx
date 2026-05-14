import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
