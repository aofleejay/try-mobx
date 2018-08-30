import React, { Fragment } from 'react'
import Devtools from 'mobx-react-devtools'
import Counter from './Counter'
import TodoList from './TodoList'
import CounterStore from '../stores/Counter'
import TodoListStore from '../stores/TodoList'

const App = () => (
  <Fragment>
    <Counter counterStore={new CounterStore()} />
    <TodoList todoListStore={new TodoListStore()} />
    <Devtools />
  </Fragment>
)

export default App
