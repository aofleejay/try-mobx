import React from 'react'
import Devtools from 'mobx-react-devtools'
import Counter from './Counter'
import TodoList from './TodoList'
import CounterStore from '../stores/Counter'
import TodoListStore from '../stores/TodoList'
import styles from './App.module.css'

const App = () => (
  <div className={styles.container}>
    <Counter counterStore={new CounterStore()} />
    <TodoList todoListStore={new TodoListStore()} />
    <Devtools />
  </div>
)

export default App
