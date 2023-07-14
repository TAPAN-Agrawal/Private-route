import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()


  const [users, setUsers] = useState<any>(() => {
    const existingUsersJson = localStorage.getItem('Users');
    const existingUsers: any[] = existingUsersJson ? JSON.parse(existingUsersJson) : [];
    return existingUsers;
  });


    const [name,setName] = useState<any>()
    const [password,setPassword] = useState<any>()






 const registerHandler = () => {
  
const temp=[ ...users,{ name: name, password: password }]
    setUsers(temp);
    localStorage.setItem('Users',JSON.stringify(temp))
   alert("user registered successfully");
        navigate('/login')
  };
const nameHandler = (e:any) =>{
    setName(e.target.value); 

  }

const passwordHandler = (e:any)=>{
        setPassword(e.target.value);
}


  useEffect(()=>{
   

    if(localStorage.getItem("login") === "true"){
     navigate('/')
    }
},[])
  return <div>
    <h1>Register</h1>
    <label>name:</label>
    <input type="string" placeholder="enter name" onChange={nameHandler}/>
    <input type="password" placeholder="enter password" onChange={passwordHandler}/>

    <button onClick={registerHandler}>Register</button>
    {/* <button onClick={setter}>update</button> */}
  </div>;
}

export default Register;