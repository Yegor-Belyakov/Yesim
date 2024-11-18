import React from 'react'
import styles from './popularCountries.module.scss'
import Countries from '../countries'
import { ICountry } from '@/app/services/api'

function PopularCountries({countries}:{countries:ICountry[]}) {
  return (
    <div className={styles.wrapper}>
       <div className={styles.header}>Популярные страны</div>
       <div className={styles.countries}><Countries countries={countries}/></div>
    </div>
  )
}

export default PopularCountries