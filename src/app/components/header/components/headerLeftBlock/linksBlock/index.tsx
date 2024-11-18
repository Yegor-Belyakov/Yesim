"use client";
import React, { useState } from "react";
import styles from "./linksBlock.module.scss";
import Link from "next/link";
import ArrowDownIcon from "@/app/icons/arrowDown";

function LinksBlock() {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Link href="#1">
        {" "}
        <div className={styles.linksButton}>Ссылка</div>
      </Link>
      <Link href="#2">
        <div className={styles.linksButton}>Ссылка</div>
      </Link>
      <Link href="#3">
        {" "}
        <div className={styles.linksButton}>Ссылка</div>
      </Link>
      <div
        className={styles.dropMenuWrapper}
        onMouseEnter={() => setIsOpenDrop(true)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div className={styles.dropMenu}>Выпадающий список</div>
          {isOpenDrop && (
            <div
              className={styles.dropOpen}
              onMouseLeave={() => setIsOpenDrop(false)}
            >
              <Link href={"#6"}>
                <div className={styles.dropMenuItem}>
                  <div>Ссылка</div>

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
                  <div>Ссылка</div>

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
                  <div>Ссылка</div>

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
