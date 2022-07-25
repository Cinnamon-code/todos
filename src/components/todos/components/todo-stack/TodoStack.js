import React from 'react'
import publicStyles from '../../css/todo-list.module.scss'
import styles from '../../css/todo-stack.module.scss'
import TodoStackItem from './TodoStackItem'

class TodoStack extends React.Component {
  render() {
    return (
      <div className={`${publicStyles.todoList} ${styles.stack}`}>
        <TodoStackItem/>
      </div>
    )
  }
}

export default TodoStack
