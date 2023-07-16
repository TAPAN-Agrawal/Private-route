import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

function Login() {

  // const {change}=useContext(MyContext)
const navigate = useNavigate()
const[users,setUsers] =useState<any>([])
const [name,setName] = useState<any>()
const [password,setPassword] = useState<any>()

  const loginHandler = ()=>{
    const u = users.find((x:any)=>x.name === name)


    if(u){
         if(u.password === password){
           localStorage.setItem("login", 'true');
          //  change("true")
            localStorage.setItem("current",JSON.stringify(name))
             navigate('/')
         }
         else{
          alert('password is incorrect')
         }
    }
    else{
         alert("user not found")
    }

  }

  //   if(u !== '' && p === password){
  //   localStorage.setItem("login",'true');
  //   navigate('/')
  // }
  // else if((u === name) && (p !== password)){
  //   alert('password does not match')
  // }
  // else{
  //   alert('unregistered user')
  // }
  // }
  const nameHandler = (e:any) =>{
    setName(e.target.value); 

  }
  const passwordHandler = (e:any) =>{
    setPassword(e.target.value);
  }
 
  useEffect(()=>{
    let da: any[] = JSON.parse(localStorage.getItem('Users') || '[]');
    setUsers(da)
         if(localStorage.getItem("login") === "true"){
          navigate('/')
         }
  },[])

  return <div>

      <h1>login</h1>
      <label>name</label>
      <input type="text" placeholder="enter name" onChange={nameHandler}/>
      <input type="password" placeholder="enter password" onChange={passwordHandler}/>
      <button onClick={loginHandler}>login</button>
  </div>;
}

export default Login;
