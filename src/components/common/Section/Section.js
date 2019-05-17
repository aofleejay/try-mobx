import React from 'react'
import styles from './Section.module.css'

function Section({ title, children }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  )
}

export default Section
