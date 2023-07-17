import React, { useEffect, useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Logout() {
  // const { change,login } = useContext(MyContext)
    interface User {
    name: string;
    email?: string;
    password: string;
  }
  const navigate = useNavigate();
  const logoutHandler = () => {
    let users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
    let current: any[] = JSON.parse(localStorage.getItem("current") || "");

    // const updated = users.filter((x:any)=>{return x.name !== current})
    //  localStorage.setItem('Users', JSON.stringify(updated))
    localStorage.setItem("login", "false");
    localStorage.setItem("current", "false");
    localStorage.setItem("registered", "false");
    toast("User logout");
    // change('false')
    navigate("/");
    // localStorage.clear()
  };
  useEffect(() => {
    // console.log("login", login);
    // if (JSON.parse(localStorage.getItem('login') || '') !== 'true') {
    //   navigate('/login');
    // }

    let da: any = JSON.parse(localStorage.getItem("login") || "").toString();
    if (da) {
      if (da === "false") {
        navigate("/login");
      }
    }
    logoutHandler();

  }, []);

  return (
    <div>
      Logout
      {/* <button onClick={logoutHandler}>Logout</button> */}
    </div>
  );
}

export default Logout;
