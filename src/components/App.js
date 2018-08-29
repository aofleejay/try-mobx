import React from 'react'
import Counter from './Counter'
import CounterStore from '../stores/Counter'

const App = () => (
  <Counter counterStore={new CounterStore()} />
)

export default App
