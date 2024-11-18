import React from "react";
import styles from "./scrollBlockItem.module.scss";
import { useTranslation } from "react-i18next";

function ScrollBlockItem() {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{t('longTitle')}</div>
      <div className={styles.image}></div>
    </div>
  );
}

export default ScrollBlockItem;
