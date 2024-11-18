import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import styles from "./login.module.scss";

import { ModalProvider } from "@/app/context/modalContext";
import '../../src/app/globals.css'
import Login from "@/app/components/login";
import { I18nextProvider } from "react-i18next";
import i18n from "../../src/app/i18n";
import { LanguageProvider } from "@/app/context/languageContext";

function LoginPage() {
  return (
    <I18nextProvider i18n={i18n}> 
    <LanguageProvider> 
    <ModalProvider>
      <div className={styles.pageWrapper}>
        <Header />
        <Login />
        <Footer />
      </div>
    </ModalProvider>
    </LanguageProvider>
    </I18nextProvider>
  );
}

export default LoginPage;
