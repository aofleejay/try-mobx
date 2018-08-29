import React from 'react'
import { observer } from 'mobx-react'

const Counter = observer(({ counterStore }) => (
  <div>
    <button onClick={counterStore.decrease}>-</button>
    <p>{counterStore.tick}</p>
    <button onClick={counterStore.increase}>+</button>
  </div>
))

export default Counter
