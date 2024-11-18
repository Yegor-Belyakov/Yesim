import React from 'react'
import styles from './footerLinksBlockItem.module.scss'

function FooterLinksBlockItem() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.header}>Заголовок</div>
    <div className={styles.link}>Ссылка</div>
    <div className={styles.link}>Ссылка</div>
    <div className={styles.link}>Ссылка</div>

    </div>

  )
}

export default FooterLinksBlockItem