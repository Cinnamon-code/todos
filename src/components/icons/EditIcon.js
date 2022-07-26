import React from 'react'
import styles from './css/icon.module.scss'

class EditIcon extends React.Component {
  render() {
    return this.props.editing ? (
      <svg className={styles.icon} t="1658555013429" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="8227">
        <path
          d="M426.666667 682.666667v42.666666h170.666666v-42.666666h-170.666666z m-42.666667-85.333334h298.666667v128h42.666666V418.133333L605.866667 298.666667H298.666667v426.666666h42.666666v-128h42.666667z m260.266667-384L810.666667 379.733333V810.666667H213.333333V213.333333h430.933334zM341.333333 341.333333h85.333334v170.666667H341.333333V341.333333z"
          fill="#303133" p-id="8228"></path>
      </svg>
    ) : (
      <svg style={{height: '95%'}} className={styles.icon} t="1658509384144" viewBox="0 0 1024 1024"
           version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="7575">
        <path
          d="M499.2 281.6l243.2 243.2L413.866667 853.333333H170.666667v-243.2l328.533333-328.533333z m0 123.733333L256 648.533333V768h119.466667l243.2-243.2-119.466667-119.466667zM614.4 170.666667L853.333333 413.866667l-72.533333 72.533333-243.2-243.2L614.4 170.666667z"
          fill="#303133" p-id="7576"></path>
      </svg>
    )
  }
}

export default EditIcon
