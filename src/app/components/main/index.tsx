"use client";
import React, { useEffect, useState } from "react";
import styles from "./main.module.scss";

import Search from "./components/search";
import HowItWork from "./components/howItWork";
import PopularCountries from "./components/popularCountries";
import { getCountries, ICountry } from "@/app/services/api";
import Flag from "../flag";
import ArrowRightIcon from "@/app/icons/arrowRight";
import { useRouter } from "next/navigation";

function Main({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: (value: string) => void;
}) {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountries("ru");
        setCountries(res);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const dropItemHandler = (countryData: ICountry) => {
    localStorage.setItem("countryData", JSON.stringify(countryData));
    router.push(`${countryData.url}`);
  };

  let searchResultCountries = countries.filter(
    (el: ICountry) =>
      el.country.toLowerCase().includes(searchValue.toLowerCase()) ||
      el.iso.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerAndSearchWrapper}>
        <div className={styles.header}>
          eSIM карты с интернетом для путешествий и бизнеса
        </div>
        <div className={styles.search} onClick={(e) => e.stopPropagation()}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          {searchValue.length != 0 &&
            (searchResultCountries.length > 0 ? (
              <div className={styles.searchDropWrapper}>
                {searchResultCountries.map((el: ICountry) => (
                  <div
                    key={el.id}
                    className={styles.searchDropItem}
                    onClick={() => dropItemHandler(el)}
                  >
                    <div className={styles.itemNameWrapper}>
                      <div className={styles.flagWrapper}>
                        {" "}
                        <Flag flag={el?.iso} />
                      </div>
                      <div className={styles.itemName}>
                        <div className={styles.title}>{el.country}</div>
                        <div
                          className={styles.subTitle}
                        >{`от ${el?.price_per_day?.amount}  ${el?.price_per_day?.currency}`}</div>
                      </div>
                    </div>{" "}
                    <div className={styles.arrowIcon}>
                      <ArrowRightIcon color="rgba(0, 0, 0, 0.46)" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={styles.searchDropWrapperNoResult}
              >{`Ничего не найдено :(`}</div>
            ))}
        </div>
      </div>
      <div className={styles.popularCountriesAndHowItWorkWrapper}>
        <div className={styles.popularCountries}>
          <PopularCountries countries={countries} />
        </div>
        <div className={styles.howItWork}>
          <HowItWork />
        </div>
      </div>
    </div>
  );
}

export default Main;