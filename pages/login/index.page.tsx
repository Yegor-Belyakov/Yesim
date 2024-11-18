import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import styles from "./login.module.scss";

import { ModalProvider } from "@/app/context/modalContext";
import '../../src/app/globals.css'
import Login from "@/app/components/login";

function LoginPage() {
  return (
    <ModalProvider>
      <div className={styles.pageWrapper}>
        <Header />
        <Login />
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default LoginPage;
