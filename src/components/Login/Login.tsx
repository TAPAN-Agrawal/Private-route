import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup';
import classes from './Login.module.scss'

function Login() {
  const initialValue = {
    name: '',
    password: '',
   
  }
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name required"),
   
    password: yup.string().required("Password required"),
    
   


})
  // const {change}=useContext(MyContext)
const navigate = useNavigate()
const[users,setUsers] =useState<any>([])
const [name,setName] = useState<any>()
const [password,setPassword] = useState<any>()

  const loginHandler = (values:any)=>{
   let names=values.name
    const u = users.find((x:any)=> x.name === names) 

    if(u){
         if(u.password === values.password){
           localStorage.setItem("login", 'true');
          //  change("true")
            localStorage.setItem("current",JSON.stringify(values.name))
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
    console.log("this is da",da);
    setUsers(da)
         if(localStorage.getItem("login") === "true"){
          navigate('/')
         }
  }, [])
  
  return <div className={classes.parent}>
  <div className={classes.h1}>Login</div>
  <div className={classes.main}>
  
  <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={loginHandler}>
    <Form className={classes.form}>
      <div className={classes.form_item}>
        <label>Name:</label><br/>
        <Field type="text" name="name" placeholder="Enter name" className={ classes.child} /><br />
        <span className={classes.err}>

        <ErrorMessage name="name"  />
        </span>
      </div>
     
      <div className={classes.form_item}>
        <label>Password:</label><br/>
        <Field type="password" name="password" placeholder="Enter password" className={ classes.child}/><br />
        <span className={classes.err}>

        <ErrorMessage name="password"  />
        </span>
      </div>
   
      
        <button type="submit" className={classes.button}>Login</button>
      
    </Form>
  </Formik>
  

</div>
</div>;

  // return <div>

  //     <h1>login</h1>
  //     <label>name</label>
  //     <input type="text" placeholder="enter name" onChange={nameHandler}/>
  //     <input type="password" placeholder="enter password" onChange={passwordHandler}/>
  //     <button onClick={loginHandler}>login</button>
  // </div>;
}

export default Login;
