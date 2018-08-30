import React from 'react'
import { Layout } from 'antd'
import Devtools from 'mobx-react-devtools'
import Counter from './Counter'
import TodoList from './TodoList'
import CounterStore from '../stores/Counter'
import TodoListStore from '../stores/TodoList'

const App = () => (
  <Layout>
    <Layout.Content style={{ padding: 50 }}>
      <Counter counterStore={new CounterStore()} />
      <TodoList todoListStore={new TodoListStore()} />
      <Devtools />
    </Layout.Content>
  </Layout>
)

export default App
