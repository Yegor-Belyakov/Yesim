"use client";
import React, { useEffect, useState } from "react";

import styles from "./countryCard.module.scss";
import HowItWork from "../main/components/howItWork";
import Flag from "../flag";
import { ICountry } from "@/app/services/api";
import TowerIcon from "@/app/icons/tower";

function CountryCard() {
  const [country, setCountry] = useState<ICountry | null>(null);

  useEffect(() => {
    const countryData = localStorage.getItem("countryData");

    if (countryData !== null) {
      setCountry(JSON.parse(countryData));
    } else {
      setCountry(null);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardHeaderTitle}>{country?.country}</div>
          <div className={styles.cardHeaderSubTitle}>
            Туристические SIM-карты с интернетом
          </div>
        </div>
        {country && <Flag flag={country.iso} />}
      </div>
      <div className={styles.cardMain}>
        <div className={styles.cardMainTitle}>Страны и операторы</div>
        <div className={styles.cardMainBody}>
          {country && (
            <div className={styles.flagWrapper}>
              {" "}
              <Flag flag={country.iso} />{" "}
              <div className={styles.countryName}> {country.country}</div>
            </div>
          )}
          {country && (
            <div className={styles.operatorsWrapper}>
              {country.operators.map((el) => (
                <div className={styles.operators}>
                  {el.phone_view} <TowerIcon />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.howItWork}>
        <HowItWork />
      </div>
    </div>
  );
}

export default CountryCard;
