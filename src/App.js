import React from 'react'
import Todo from './components/todos/Todo'

class App extends React.Component {
  render() {
    return (
      <>
        <Todo todos={[...this.state.todos]}/>
      </>
    )
  }

  state = {
    todos: [
      {id: 1, title: 'hello', content: 'shsfkbdsnfksjdnbf', done: true, deleted: false, updated: '2001-10-1'},
      {id: 2, title: 'hello1', content: 'shsfkbdsnfksjdnbf', done: false, deleted: false, updated: '2002-10-1'},
      {id: 3, title: 'hello2', content: 'shsfkbdsnfksjdnbf', done: false, deleted: false, updated: '2003-10-1'},
      {id: 4, title: 'hello3', content: 'shsfkbdsnfksjdnbf', done: false, deleted: false, updated: '2004-10-1'},
      {id: 5, title: 'hello4', content: 'shsfkbdsnfksjdnbf', done: false, deleted: false, updated: '2005-10-1'},
      {id: 6, title: 'hello5', content: 'shsfkbdsnfksjdnbf', done: false, deleted: false, updated: '2006-10-1'},
      {id: 7, title: 'hello6', content: 'shsfkbdsnfksjdnbf', done: false, deleted: false, updated: '2007-10-1'}
    ]
  }
}

export default App
