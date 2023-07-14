import React, { useEffect } from "react";

function Logout() {

const logoutHandler = () =>{
  let users: any[] = JSON.parse(localStorage.getItem('Users') || '[]');
  let current:any[] = JSON.parse(localStorage.getItem('current') || '');

  const updated = users.filter((x:any)=>{return x.name !== current})
 localStorage.setItem('Users', JSON.stringify(updated))
 localStorage.setItem('login','false');
 localStorage.setItem('current','false')
  // localStorage.clear()
}
   useEffect(()=>{
        // const a = 
   },[])

  return <div>Logout
    <button onClick={logoutHandler}>Logout</button>
  </div>;
}

export default Logout;
