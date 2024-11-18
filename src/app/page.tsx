'use client'
import styles from "./page.module.scss";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={styles.pageWrapper} onClick={() => setSearchValue('')}>
      <Header />
      <Main searchValue={searchValue} setSearchValue={setSearchValue} />
      <Footer />
    </div>
  );
}
