import React from "react";
import styles from "./footerLinksBlockItem.module.scss";
import { useTranslation } from "react-i18next";

function FooterLinksBlockItem() {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{t("title")}</div>
      <div className={styles.link}>{t("link")}</div>
      <div className={styles.link}>{t("link")}</div>
      <div className={styles.link}>{t("link")}</div>
    </div>
  );
}

export default FooterLinksBlockItem;
