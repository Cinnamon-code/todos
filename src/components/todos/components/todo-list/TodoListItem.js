import React from 'react'
import styles from '../../css/todo-item.module.scss'
import EditIcon from '../../../icons/EditIcon'
import DoneIcon from '../../../icons/DoneIcon'
import DeleteIcon from '../../../icons/DeleteIcon'

class TodoListItem extends React.PureComponent {
  render() {
    return (
      <div className={styles.todoItem}
           style={{
             boxShadow: this.props.done ? 'none' : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
             border: this.props.done ? '1px #DCDFE6 solid' : 'none'
           }}>
        <div className={styles.header}
             style={{
               borderBottom: this.props.done ? 'none' : '1px #E4E7ED solid',
               borderRadius: this.props.done ? '10px' : '10px 10px 0 0'
             }}>
          {this.props.title && (
            <h3 className={styles.title}
                style={{
                  textDecoration: this.props.done ? 'line-through' : 'none'
                }}>
              {this.props.title}
            </h3>
          )}
          <div className={styles.opt}>
            <span className={`${styles.optBtn} ${styles.done}`}
                  style={{
                    backgroundColor: this.props.done ? '#e0f3d8' : ''
                  }}
                  onClick={this.handleDone}>
              <DoneIcon/>
            </span>
            <span className={`${styles.optBtn} ${styles.edit}`}
                  onClick={this.handleEdit}
                  style={{
                    display: this.props.done ? 'none' : 'inline-block'
                  }}>
              <EditIcon editing={this.state.editing}/>
            </span>
            <span className={`${styles.optBtn} ${styles.delete}`}
                  onClick={this.handleDelete}>
              <DeleteIcon/>
            </span>
          </div>
        </div>
        <div className={styles.body}
             style={{
               display: this.props.done ? 'none' : 'block',
               backgroundColor: this.state.editing ? '#fff' : '#f8f8f8'
             }}>
            <textarea className={styles.content}
                      defaultValue={this.state.value}
                      disabled={!this.state.editing}
                      onInput={this.handleInput}/>
        </div>
      </div>
    )
  }

  state = {
    editing: false,
    value: '',
  }

  handleDone = () => {
    console.log('handle done')
    console.log(this.props.index, this.state.value, this.props.done)
    this.props.onChange(this.props.index, this.state.value, !this.props.done)
  }

  handleEdit = () => {
    !this.props.done && this.setState({editing: !this.state.editing})
  }

  handleInput = (e) => {
    this.setState({value: e.target.value})
  }

  handleDelete = () => {
    this.props.onDelete(this.props.index)
  }

  componentDidMount() {
    this.setState({value: this.props.children})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.done && prevState.editing && this.props.done) this.setState({editing: false})
    if (!this.state.editing && prevState.editing) this.props.onChange(this.props.index, this.state.value, this.props.done)
  }
}

export default TodoListItem
