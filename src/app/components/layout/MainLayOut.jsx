import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const MainLayOut = () => {
  return (
    <main>
      <header className="h-[64px]">
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayOut;
