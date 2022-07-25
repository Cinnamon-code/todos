import React from 'react'
import TodoList from './components/todo-list/TodoList'
import TodoStack from './components/todo-stack/TodoStack'

class Todo extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}>
        <TodoList todos={this.props.todos}/>
        <TodoStack/>
      </div>
    )
  }
}

export default Todo
