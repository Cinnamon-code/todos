import React from 'react'
import styles from '../../css/filter.module.scss'

console.log(styles)

class Filter extends React.PureComponent {
  render() {
    return (
      <div className={styles.filter}>
        <div className={`${styles.btn} ${styles.all} ${this.state.value === 0 ? styles.selected : ''}`}
             onClick={() => this.handleClick(0)}>
          All
        </div>
        <div className={`${styles.btn} ${styles.active} ${this.state.value === 1 ? styles.selected : ''}`}
             onClick={() => this.handleClick(1)}>
          Active
        </div>
        <div className={`${styles.btn} ${styles.completed} ${this.state.value === 2 ? styles.selected : ''}`}
             onClick={() => this.handleClick(2)}>
          Completed
        </div>
        <div className={styles.left}>{this.props.left} items left</div>
      </div>
    )
  }

  state = {
    value: 0,
  }

  handleClick = (value) => {
    this.setState({value})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.onSwitch(this.state.value)
  }
}

export default Filter
