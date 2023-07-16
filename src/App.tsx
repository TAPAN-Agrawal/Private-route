import React, { createContext, useEffect, useState } from "react";
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

const MyContext = createContext<any | null>(null);


function App() {
  const [login, setlogin] = useState<any>()
  // const change = (a:any) => {
  //   setlogin(a)
  // }

  setInterval(() => {
    try {
      let data = JSON.parse(localStorage.getItem('login') || '');
      let login = data ? data.toString() : ''; // Set login to an empty string if data is null or undefined
  
      setlogin(login);
      console.log('login', typeof login);
    } catch (error) {
      // Handle the exception here
      // console.error('Error retrieving data from local storage:', error);
    }
  }, 1000);
  

  useEffect(() => {
   
  }, []);
  return (
    <div className="App">
      {login}
      
        <div>
        <NavLink to="/">Home-</NavLink>
      {login !== "true" ? <NavLink to='/register'>Register-</NavLink>: null}  
       {login !== "true" ? <NavLink to="/login">Login-</NavLink>:null} 
        <NavLink to="/about">About-</NavLink>
        <NavLink to="/skill">Skill-</NavLink>
        {/* <h1>this{islogin}</h1> */}
    {login === "true" ? <NavLink to="/logout">Logout-</NavLink>:null } 
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
export { MyContext };