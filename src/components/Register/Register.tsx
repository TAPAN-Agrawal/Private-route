import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import classes from "./Register.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  interface Value {
    name: string;
    email: string;
    password: string;
  }

  interface User {
    name: string;
    email?: string;
    password: string;
  }

  const initialValue = {
    name: "",
    email: "",
    password: "",
    country: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name required"),
    email: yup.string().email().required("Email required"),
    password: yup.string().min(8).required("Password required"),

    country: yup.string().required("Country required"),
  });
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>(() => {
    const existingUsersJson = localStorage.getItem("Users");
    const existingUsers: User[] = existingUsersJson
      ? JSON.parse(existingUsersJson)
      : [];
    return existingUsers;
  });

  //     const [name,setName] = useState<any>()
  //   const [password, setPassword] = useState<any>()
  //   const [email, setEmail] = useState<any>()
  // const [country, setCountry] = useState<any>()

  const [alreadyUser, setalreadyUser] = useState<User[]>([]);

  const registerHandler = (values: Value) => {
    let names = values.name;
    let emails = values.email;
    const r = alreadyUser.find((x: User) => x.name === names);
    const e = alreadyUser.find((x: User) => x.email === emails);

    if (r) {
      toast.error("User already exists");
      return;
    }
    if (e) {
      toast.error("email already exists");
      return;
    }
    const temp = [
      ...users,
      { name: values.name, password: values.password, email: values.email },
    ];
    setUsers(temp);
    localStorage.setItem("Users", JSON.stringify(temp));
    toast("user registered successfully");
    navigate("/login");
    localStorage.setItem("registered", "true");
  };
  // const nameHandler = (e:any) =>{
  //     setName(e.target.value);

  //   }

  // const passwordHandler = (e:any)=>{
  //         setPassword(e.target.value);
  //   }
  //   const emailHandler = (e: any) => {
  //     setEmail(e.target.value);
  //   }
  //   const countryHandler = (e: any) => {
  //       setCountry(e.target.value);
  //     }

  useEffect(() => {
    if (localStorage.getItem("login") === "true") {
      navigate("/");
    }
    if (localStorage.getItem("registered") === "true") {
      navigate("/login");
    }

    let temp: User[] = JSON.parse(localStorage.getItem("Users") || "[]");
    setalreadyUser(temp);
  }, []);
  return (
    <div className={classes.parent}>
      <div className={classes.h1}>Register</div>
      <div className={classes.main}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={registerHandler}
        >
          <Form className={classes.form}>
            <div className={classes.form_item}>
              <label>Name:</label>
              <br />
              <Field
                type="text"
                name="name"
                placeholder="Enter name"
                className={classes.child}
              />
              <br />
              <span className={classes.err}>
                <ErrorMessage name="name" />
              </span>
            </div>
            <div className={classes.form_item}>
              <label>Email:</label>
              <br />
              <Field
                type="text"
                name="email"
                placeholder="Enter email"
                className={classes.child}
              />
              <br />
              <span className={classes.err}>
                <ErrorMessage name="email" />
              </span>
            </div>
            <div className={classes.form_item}>
              <label>Password:</label>
              <br />
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className={classes.child}
              />
              <br />
              <span className={classes.err}>
                <ErrorMessage name="password" />
              </span>
            </div>
            <div className={classes.form_item}>
              <label>country</label>
              <br />
              <Field name="country" as="select" className={classes.child}>
                <option value="">Select country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </Field>
              <br />
              <span className={classes.err}>
                <ErrorMessage name="country" />
              </span>
            </div>

            <button type="submit" className={classes.button}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;
