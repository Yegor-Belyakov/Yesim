import React from "react";
import styles from "./country.module.scss";
import Image from "next/image";
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
        <ArrowRightIcon color="#000000E0" />
      </div>
    </div>
  );
}

export default Country;
