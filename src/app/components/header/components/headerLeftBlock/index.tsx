import React from "react";
import LinksBlock from "./linksBlock";
import styles from "./headerLeftBlock.module.scss";
import Link from "next/link";
import HeaderLogoIcon from "../../../../icons/header/headerLogo";

function HeaderLeftBlock() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.headerLogoIcon}>
          <HeaderLogoIcon />
        </div>
      </Link>
      <div className={styles.linksBlock}>
        {" "}
        <LinksBlock />
      </div>
    </div>
  );
}

export default HeaderLeftBlock;
