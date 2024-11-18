import React from "react";
import styles from "./howItWork.module.scss";
import ScrollBlockItem from "../scrollBlockItem";

function HowItWork() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Как это работает</div>
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
