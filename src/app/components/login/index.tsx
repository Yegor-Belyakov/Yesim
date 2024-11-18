"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.scss";
import CheckIcon from "@/app/icons/checkIcon";

function Login() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const emailFromLocalStorage = localStorage.getItem("email");
    
    if (emailFromLocalStorage !== null) {
      setEmail(JSON.parse(emailFromLocalStorage));
    } else {
      setEmail("");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconCheck}>
        <CheckIcon />
      </div>
      <div className={styles.text}>Вы успешно вошли через почту {email}</div>
    </div>
  );
}

export default Login;
