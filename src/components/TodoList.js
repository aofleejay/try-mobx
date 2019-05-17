import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styles from './TodoList.module.css'

class TodoList extends Component {
  state = { todoInput: '' }

  addTodo = e => {
    e.preventDefault()
    this.props.todoListStore.addTodo(e.target.todo.value)
    this.setState({ todoInput: '' })
  }

  changeTodoInput = e => {
    this.setState({ todoInput: e.target.value })
  }

  render() {
    const {
      todos,
      completedTodos,
      totalTodos,
      changeTodoStatus,
    } = this.props.todoListStore
    return (
      <div className={styles.container}>
        <p>
          {completedTodos}/{totalTodos}
        </p>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            name="todo"
            value={this.state.todoInput}
            onChange={this.changeTodoInput}
          />
          <input type="submit" value="add" />
        </form>
        <ul>
          {todos.map(todo => (
            <div key={todo.id}>
              <input
                type="checkbox"
                onChange={() => changeTodoStatus(todo.id, !todo.completed)}
              />
              <li>{todo.text}</li>
              <p>{`${todo.completed}`}</p>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default observer(TodoList)
