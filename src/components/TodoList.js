import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Card from './common/Card'

class TodoList extends Component {
  state = { todoInput: '' }

  addTodo = (e) => {
    e.preventDefault()
    this.props.todoListStore.addTodo(e.target.todo.value)
    this.setState({ todoInput: '' })
  }

  changeTodoInput = (e) => {
    this.setState({ todoInput: e.target.value })
  }

  render() {
    return (
      <Card>
        <div style={{ flexDirection: 'column' }}>
          <form onSubmit={this.addTodo}>
            <input
              type="text"
              name="todo"
              value={this.state.todoInput}
              onChange={this.changeTodoInput}
            />
            <input
              type="submit"
              value="add"
            />
          </form>
          <ul>
            {this.props.todoListStore.todos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>
        </div>
      </Card>
    )
  }
}

export default observer(TodoList)
