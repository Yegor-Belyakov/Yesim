"use client";
import React, { useRef } from "react";
import styles from "./search.module.scss";
import SearchIcon from "@/app/icons/main/searchIcon";

function Search({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={styles.inputWrapper}
      onClick={() => inputRef.current?.focus()}
    >
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <div>
        <input
          ref={inputRef}
          className={styles.input}
          placeholder="Найти направление"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
