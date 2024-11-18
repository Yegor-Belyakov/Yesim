import React from "react";
import styles from "./scrollBlockItem.module.scss";

function ScrollBlockItem() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Очень длинный заголовок</div>
      <div className={styles.image}></div>
    </div>
  );
}

export default ScrollBlockItem;
