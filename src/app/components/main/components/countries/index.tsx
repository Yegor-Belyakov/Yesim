"use client";
import React, { useState } from "react";
import styles from "./countries.module.scss";
import Country from "../country";
import { ICountry } from "@/app/services/api";
import { usePathname, useRouter } from "next/navigation";

function Countries({ countries }: { countries: ICountry[] }) {
  const [showAll, setShowAll] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleCountryClick = (countryData: ICountry) => {
    localStorage.setItem("countryData", JSON.stringify(countryData));
    router.push(`${countryData.url}`);
  };

  const visibleCountries = showAll ? countries : countries.slice(0, 12);

  return (
    <>
      <div className={styles.wrapper}>
        {visibleCountries?.map((el: ICountry) => (
          <div key={el.id} onClick={() => handleCountryClick(el)}>
            <Country name={el.country} flag={el.iso} />
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className={styles.showAllButton}
      >
        {showAll ? "Показать популярные страны" : "Показать все страны"}
      </button>
    </>
  );
}

export default Countries;
