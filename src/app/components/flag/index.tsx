import React from "react";
import styles from "./flag.module.scss";
import Image from "next/image";

function Flag({ flag }: { flag: string }) {
  return (
    <div className={styles.flag}>
      <Image
        src={`https://yesim.tech/flags/${flag}.svg`}
        width={32}
        height={32}
        alt="flag image"
      />
    </div>
  );
}

export default Flag;
