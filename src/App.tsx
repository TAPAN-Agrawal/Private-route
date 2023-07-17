import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Logout from "./components/Logout/Logout";
import Skill from "./components/skill/Skill";
import Register from "./components/Register/Register";
import Carrer from "./components/Carrer/Carrer";
import Navbar from "./components/Navbar/Navbar";
import Notfound from "./components/404/Notfound";
import { ToastContainer } from "react-toastify";

const MyContext = createContext<any | null>(null);

function App() {
  useEffect(() => {}, []);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<ProtectedRoute Component={About} />} />
        <Route path="/skill" element={<ProtectedRoute Component={Skill} />} />
        <Route path="/carrer" element={<ProtectedRoute Component={Carrer} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
export { MyContext };
