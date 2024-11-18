import React from "react";
import styles from "./country.module.scss";
import ArrowRightIcon from "@/app/icons/arrowRight";
import Flag from "@/app/components/flag";

function Country({ name, flag }: { name: string; flag: string }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flagAndNameWrapper}>
        <Flag flag={flag} />
        <div>{name}</div>
      </div>
      <div className={styles.icon}>
        <ArrowRightIcon />
      </div>
    </div>
  );
}

export default Country;
