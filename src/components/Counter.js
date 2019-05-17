import React from 'react'
import { observer } from 'mobx-react'
import { Button, Section } from './common'
import styles from './Counter.module.css'

const Counter = observer(({ counterStore }) => (
  <Section title="Counter">
    <div className={styles.container}>
      <Button onClick={counterStore.decrease}>-</Button>
      <p>{counterStore.tick}</p>
      <Button onClick={counterStore.increase}>+</Button>
    </div>
  </Section>
))

export default Counter
