"use client";
import React, { useEffect, useState } from "react";

import styles from "./countryCard.module.scss";
import HowItWork from "../main/components/howItWork";
import Flag from "../flag";
import { ICountry } from "@/app/services/api";
import TowerIcon from "@/app/icons/tower";
import { useTranslation } from "react-i18next";

function CountryCard() {
  const [country, setCountry] = useState<ICountry | null>(null);
  const { t } = useTranslation();

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
          {t('travelSim')}
          </div>
        </div>
        {country && <Flag flag={country.iso} />}
      </div>
      <div className={styles.cardMain}>
        <div className={styles.cardMainTitle}>{t('countriesOperators')}</div>
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
              {country.operators.map((el,i) => (
                <div key={i} className={styles.operators}>
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
