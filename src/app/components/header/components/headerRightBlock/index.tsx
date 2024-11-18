"use client";
import React, { useState } from "react";
import styles from "./headerRightBlock.module.scss";
import ArrowDownIcon from "@/app/icons/arrowDown";
import { useModal } from "@/app/context/modalContext";

function HeaderRightBlock() {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const { openModal } = useModal();

  const [language, setLanguage] = useState("ENG");
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.dropContainer}>
        <div
          className={styles.languageDropWrapper}
          onClick={() => setIsOpenDrop(!isOpenDrop)}
        >
          <div className={styles.languageDrop}>{language}</div>
          <div className={isOpenDrop ? styles.arrowIconToUp : styles.arrowIcon}>
            <ArrowDownIcon color="#00000075" />
          </div>
        </div>

        <div
          className={isOpenDrop ? styles.dropMenuOpen : styles.dropMenuClose}
        >
          <div
            className={styles.languageItem}
            onClick={() => {
              setLanguage("RUS");
              setIsOpenDrop(false);
            }}
          >
            RUS
          </div>
          <div
            className={styles.languageItem}
            onClick={() => {
              setLanguage("ENG");
              setIsOpenDrop(false);
            }}
          >
            ENG
          </div>
        </div>
      </div>

      <div className={styles.loginButton} onClick={openModal}>Войти</div>
    </div>
  );
}

export default HeaderRightBlock;
