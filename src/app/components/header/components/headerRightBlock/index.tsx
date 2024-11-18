"use client";
import React, { useEffect, useState } from "react";
import styles from "./headerRightBlock.module.scss";
import ArrowDownIcon from "@/app/icons/arrowDown";
import { useModal } from "@/app/context/modalContext";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/app/context/languageContext";
import { useRouter } from "next/navigation";

function HeaderRightBlock() {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [auth, setAuth] = useState(false);
  const { openModal } = useModal();
  const { t, i18n } = useTranslation();
  const { setLanguage } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    setAuth(localStorage.getItem("email") !== null);
  }, []);

  const [l, setL] = useState("");
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("myLanguage") || "ru");
    setL(localStorage.getItem("myLanguage") || "ru");
  }, []);

  const handleLangSwitch = (lang: string) => {
    localStorage.setItem("myLanguage", lang);
    setL(lang);
    setLanguage(lang === "ru" ? "ru" : "en");
    i18n.changeLanguage(lang);
    setIsOpenDrop(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropContainer}>
        <div
          className={styles.languageDropWrapper}
          onClick={() => setIsOpenDrop(!isOpenDrop)}
        >
          <div className={styles.languageDrop}>{l == "ru" ? "RUS" : "ENG"}</div>
          <div className={isOpenDrop ? styles.arrowIconToUp : styles.arrowIcon}>
            <ArrowDownIcon color="#00000075" />
          </div>
        </div>

        <div
          className={isOpenDrop ? styles.dropMenuOpen : styles.dropMenuClose}
        >
          <div
            className={styles.languageItem}
            onClick={() => handleLangSwitch("ru")}
          >
            RUS
          </div>
          <div
            className={styles.languageItem}
            onClick={() => {
              handleLangSwitch("en");
            }}
          >
            ENG
          </div>
        </div>
      </div>

      {!auth ? (
        <div className={styles.loginButton} onClick={openModal}>
          {t("signIn")}
        </div>
      ) : (
        <div
          className={styles.loginButton}
          onClick={() => {
            localStorage.removeItem("email");
            router.push(`/`);
          }}
        >
          {t("signOut")}
        </div>
      )}
    </div>
  );
}

export default HeaderRightBlock;
