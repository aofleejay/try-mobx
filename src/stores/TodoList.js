import { decorate, observable, action } from 'mobx'

class TodoList {
  todos = []

  addTodo = (todo) => {
    this.todos.push(todo)
  }
}

decorate(TodoList, {
  todos: observable,
  addTodo: action,
})

export default TodoList
