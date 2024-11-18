'use client'
import React from "react";
import styles from "./header.module.scss";
import HeaderLeftBlock from "./components/headerLeftBlock";
import HeaderRightBlock from "./components/headerRightBlock";
import HeaderRightBlockMobileIcon from "@/app/icons/header/headerRightBlockMobileIcon";
import { useModal } from "@/app/context/modalContext";

function Header() {
  const { openModal } = useModal();

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBlocksWrapper}>
        <HeaderLeftBlock />
        <div className={styles.rightBlockDesctop}>
          <HeaderRightBlock />
        </div>
        <div className={styles.rightBlockMobile} onClick={openModal}>
          <HeaderRightBlockMobileIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
