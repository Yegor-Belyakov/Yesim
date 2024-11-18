import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React from "react";
import styles from "./country.module.scss";
import CountryCard from "@/app/components/countryCard";
import { ModalProvider } from "@/app/context/modalContext";
import '../../src/app/globals.css'

function CountryCardPage() {
  return (
    <ModalProvider>
      <div className={styles.pageWrapper}>
        <Header />
        <CountryCard />
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default CountryCardPage;
