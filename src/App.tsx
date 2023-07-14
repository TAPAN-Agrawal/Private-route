import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";
import Skill from "./components/Skill";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">Home-</NavLink>
        <NavLink to='/register'>Register-</NavLink>
        <NavLink to="/login">Login-</NavLink>
        <NavLink to="/about">About-</NavLink>
        <NavLink to="/skill">Skill-</NavLink>

        <NavLink to="/logout">Logout-</NavLink>
      </div>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/about" element={<ProtectedRoute Component={About} />} />
        <Route path="/skill" element={<ProtectedRoute Component={Skill} />} />
      </Routes>
    </div>
  );
}

export default App;
