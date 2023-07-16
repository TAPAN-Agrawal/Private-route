import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import {  Navigate, Route, useNavigate } from "react-router-dom";

function ProtectedRoute(Props:any) {
 const  {Component}=Props;
 const navigate = useNavigate()
//  const [login,setislogin] =useState<any>()

  
 useEffect(()=>{
        let isLogin= localStorage.getItem("login");
        if(isLogin !== "true"){
               navigate('/login')
        }
        
 },[])
  
  return <div>

       <Component/>


  </div>;
}

export default ProtectedRoute;
