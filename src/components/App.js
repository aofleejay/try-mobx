import React, { Fragment } from 'react'
import Devtools from 'mobx-react-devtools'
import Counter from './Counter'
import CounterStore from '../stores/Counter'

const App = () => (
  <Fragment>
    <Counter counterStore={new CounterStore()} />
    <Devtools />
  </Fragment>
)

export default App
