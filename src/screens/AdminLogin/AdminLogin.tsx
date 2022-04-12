import React, { useEffect, useState } from "react";
import InputField from "../../components/inputField/Input";
import styles from "./AdminLogin.module.css";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import e from "express";
import { RootStateOrAny, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userData from "../../redux/slice/userData";
const AdminLogin = () => {
  const adminData = useSelector((state: RootStateOrAny) => state?.adminData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loggedIn, uid } = useSelector(
    (state: RootStateOrAny) => state?.adminData
  );
  const handleSubmit = async (e: React.FormEvent<any>) => {
    if (email === "" || password === "") {
      alert("please check credentials");
    } else {
      if (email === "e19cse041@bennett.edu.in") {
        if (password === "admin@bennett") {
          navigate("/home");
        } else {
          alert("Invalid Credentials");
        }
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <div className={styles.body}>
      <form
        onSubmit={(e: React.FormEvent<any>) => {
          handleSubmit(e);
        }}
        className={styles.form}
      >
        <img id={styles.img} src="./images/logo.png" alt="logo" />
        <InputField
          typeOfInput="email"
          className={styles.input}
          lableText="LOGIN ID"
          garyBold={true}
          onChange={(event: any) => setEmail(event.target.value)}
        />
        <InputField
          typeOfInput="password"
          className={styles.input}
          lableText="PASSWORD"
          garyBold={true}
          onChange={(event: any) => setPassword(event.target.value)}
        />
        <button className={styles.btn} onClick={() => console.log(`loggin in`)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
