"use client";
import React, { useState } from "react";
import styles from "./linksBlock.module.scss";
import Link from "next/link";
import ArrowDownIcon from "@/app/icons/arrowDown";
import { useTranslation } from "react-i18next";

function LinksBlock() {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Link href="#1">
        {" "}
        <div className={styles.linksButton}>{t("link")}</div>
      </Link>
      <Link href="#2">
        <div className={styles.linksButton}>{t("link")}</div>
      </Link>
      <Link href="#3">
        {" "}
        <div className={styles.linksButton}>{t("link")}</div>
      </Link>
      <div
        className={styles.dropMenuWrapper}
        onMouseEnter={() => setIsOpenDrop(true)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div className={styles.dropMenu}>{t("dropDown")}</div>
          {isOpenDrop && (
            <div
              className={styles.dropOpen}
              onMouseLeave={() => setIsOpenDrop(false)}
            >
              <Link href={"#6"}>
                <div className={styles.dropMenuItem}>
                  <div>{t("link")}</div>

                  <div
                    className={
                      isOpenDrop ? styles.arrowIconToRight : styles.arrowIcon
                    }
                  >
                    <ArrowDownIcon color="#00000075" />
                  </div>
                </div>
              </Link>
              <Link href={"#7"}>
                <div className={styles.dropMenuItem}>
                  <div>{t("link")}</div>

                  <div
                    className={
                      isOpenDrop ? styles.arrowIconToRight : styles.arrowIcon
                    }
                  >
                    <ArrowDownIcon color="#00000075" />
                  </div>
                </div>
              </Link>
              <Link href={"#8"}>
                <div className={styles.dropMenuItem}>
                  <div>{t("link")}</div>
                  <div
                    className={
                      isOpenDrop ? styles.arrowIconToRight : styles.arrowIcon
                    }
                  >
                    <ArrowDownIcon color="#00000075" />
                  </div>
                </div>
              </Link>
            </div>
          )}
          <div>
            {isOpenDrop ? (
              <div className={styles.arrowIconToUp}>
                {" "}
                <ArrowDownIcon color="rgba(0, 0, 0, 0.46)" />
              </div>
            ) : (
              <div className={styles.arrowIcon}>
                {" "}
                <ArrowDownIcon color="rgba(0, 0, 0, 0.46)" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksBlock;
