import React from 'react'
import DoneIcon from '../../../icons/DoneIcon'
import styles from '../../css/input.module.scss'
import DeleteIcon from '../../../icons/DeleteIcon'

class Input extends React.Component {
  render() {
    return (
      <div className={styles.input}>
        <span className={`${styles.btn} ${styles.doneBtn}`}
              onClick={this.handleAllDone}
              style={{
                backgroundColor: this.props.done ? '#e0f3d8' : ''
              }}>
          <DoneIcon/>
        </span>
        <input className={styles.textField} type='text'
               defaultValue={''}
               onKeyUp={this.handleAdd}/>
        <span className={`${styles.btn} ${styles.deleteBtn}`}
              onClick={this.handleDeleteCompleted}>
          <DeleteIcon/>
        </span>
      </div>
    )
  }

  handleAllDone = () => {
    this.props.onDone(!this.props.done)
  }

  handleDeleteCompleted = () => {
    this.props.onDeleteCompleted()
  }

  handleAdd = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      this.props.onAdd(e.target.value)
      e.target.value = ''
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }
}

export default Input
