import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import styles from "./country.module.scss";
import CountryCard from "@/app/components/countryCard";
import { ModalProvider } from "@/app/context/modalContext";
import '../../src/app/globals.css'
import { I18nextProvider } from "react-i18next";
import i18n from "../../src/app/i18n";
import { LanguageProvider } from "@/app/context/languageContext";

function CountryCardPage() {
  return (
    <I18nextProvider i18n={i18n}> 
    <LanguageProvider>
    <ModalProvider>
      <div className={styles.pageWrapper}>
        <Header />
        <CountryCard />
        <Footer />
      </div>
    </ModalProvider>
    </LanguageProvider>
    </I18nextProvider>
  );
}

export default CountryCardPage;
