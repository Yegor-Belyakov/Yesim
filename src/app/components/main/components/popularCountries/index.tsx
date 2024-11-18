import React from 'react'
import styles from './popularCountries.module.scss'
import Countries from '../countries'
import { ICountry } from '@/app/services/api'
import { useTranslation } from 'react-i18next';

function PopularCountries({countries}:{countries:ICountry[]}) {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
       <div className={styles.header}>{t('popularCountries')}</div>
       <div className={styles.countries}><Countries countries={countries}/></div>
    </div>
  )
}

export default PopularCountries