import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'

function Navbar() {
    const [login, setlogin] = useState<any>()
    // const change = (a:any) => {
    //   setlogin(a)
    // }
  
    setInterval(() => {
      try {
        let data = JSON.parse(localStorage.getItem('login') || '');
        let login = data ? data.toString() : ''; // Set login to an empty string if data is null or undefined
    
        setlogin(login);
        // console.log('login', typeof login);
      } catch (error) {
        // Handle the exception here
        // console.error('Error retrieving data from local storage:', error);
      }
    }, 1000);
  return (
      <div className={classes.main}>
            <div className={classes.child}>
        <NavLink to="/" className={classes.link}>Home</NavLink>
      {login !== "true" ? <NavLink to='/register' className={classes.link}>Register</NavLink>: null}  
       {login !== "true" ? <NavLink to="/login" className={classes.link}>Login</NavLink>:null} 
        <NavLink to="/about" className={classes.link}>About</NavLink>
        <NavLink to="/skill" className={classes.link}>Skill</NavLink>
        <NavLink to="/carrer" className={classes.link}>Carrer</NavLink>

        {/* <h1>this{islogin}</h1> */}
    {login === "true" ? <NavLink to="/logout" className={classes.link}>Logout</NavLink>:null } 
      </div>
    </div>
  )
}

export default Navbar