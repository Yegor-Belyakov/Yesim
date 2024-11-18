import React from "react";
import styles from "./howItWork.module.scss";
import ScrollBlockItem from "../scrollBlockItem";
import { useTranslation } from "react-i18next";

function HowItWork() {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{t('faq')}</div>
      <div className={styles.scrollBlock}>
        <ScrollBlockItem />
        <ScrollBlockItem />
        <ScrollBlockItem />
        <ScrollBlockItem />
      </div>
    </div>
  );
}

export default HowItWork;
