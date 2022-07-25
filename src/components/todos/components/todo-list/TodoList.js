import React from 'react'
import TodoListItem from './TodoListItem'
import styles from '../../css/todo-list.module.scss'
import Filter from './Filter'
import Input from './Input'

class TodoList extends React.Component {
  render() {
    return (
      <div className={styles.todoList}>
        <Input done={this.state.allDone}
               onDone={this.handleDone}
               onAdd={this.handleAdd}
               onDeleteCompleted={this.handleDeleteCompleted}
        />
        <div className={styles.wrapper}>
          {this.state.todos.map((elem, i) => {
              return this.filterMap(elem) && (
                <TodoListItem key={elem.id} title={elem.title} done={elem.done} index={i}
                              onChange={this.handleChange}
                              onDelete={this.handleDelete}>
                  {elem.content}
                </TodoListItem>
              )
            }
          )}
        </div>
        <Filter onSwitch={this.handleSwitch} left={this.state.todos.filter(item => !item.done).length}/>
      </div>
    )
  }

  state = {
    todos: [],
    filterValue: 0,
    allDone: false
  }

  filterMap = (item) => {
    if (item.deleted) return false
    if (this.state.filterValue === 0) return true
    if (this.state.filterValue === 1) return !item.done
    if (this.state.filterValue === 2) return item.done
  }

  sort = (todos) => {
    return [...todos ?? []].sort((a, b) => {
      if (a.done && !b.done) return 1
      if (b.done && !a.done) return -1
      return +new Date(b.updated) - new Date(a.updated)
    })
  }

  componentDidMount() {
    this.setState({todos: this.sort(this.props.todos)})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const allDone = this.state.todos.every(todo => todo.done)
    if (prevState.allDone !== allDone) this.setState({allDone})
  }

  handleDone = (done) => {
    const todos = [...this.state.todos]
    todos.forEach(todo => todo.done = done)
    this.setState({todos})
  }

  handleDeleteCompleted = () => {
    const todos = [...this.state.todos].filter(item => !item.done)
    this.setState({todos})
  }

  handleAdd = (value) => {
    const todos = [...this.state.todos]
    todos.unshift({
      id: +new Date(),
      title: value,
      content: '',
      done: false,
      deleted: false,
      updated: new Date().toString()
    })
    this.setState({todos})
  }

  handleChange = (i, content, done) => {
    const todos = [...this.state.todos]
    todos[i] = {
      ...todos[i],
      content,
      done,
      updated: todos[i].content === content ? todos[i].updated : new Date().toString()
    }
    this.setState({todos: this.sort(todos)})
  }

  handleDelete = (i) => {
    const todos = [...this.state.todos]
    todos[i].deleted = true
    this.setState({todos})
  }

  handleSwitch = (value) => {
    this.setState({filterValue: value})
  }
}

export default TodoList
