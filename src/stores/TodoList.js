import { decorate, observable, action, computed } from 'mobx'

class TodoList {
  todos = []

  addTodo = text => {
    const todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    this.todos.push(todo)
  }

  changeTodoStatus = (id, status) => {
    const todo = this.todos.find(todo => todo.id === id)
    todo.completed = status
  }

  get totalTodos() {
    return this.todos.length
  }

  get completedTodos() {
    return this.todos.filter(todo => todo.complete === true).length
  }
}

decorate(TodoList, {
  todos: observable,
  addTodo: action,
  changeTodoStatus: action,
  totalTodos: computed,
  completedTodos: computed,
})

export default TodoList
