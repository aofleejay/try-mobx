import React from 'react'
import { observer } from 'mobx-react'
import styles from './Counter.module.css'

const Counter = observer(({ counterStore }) => (
  <div className={styles.container}>
    <button className={styles.button} onClick={counterStore.decrease}>
      -
    </button>
    <p>{counterStore.tick}</p>
    <button className={styles.button} onClick={counterStore.increase}>
      +
    </button>
  </div>
))

export default Counter
