import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import StatesSection from "../../components/StatesSection/StatesSection";


const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-1">
      <Outlet></Outlet>
      <Footer></Footer>
      </main>
  
    </div>
  );
};

export default Root;