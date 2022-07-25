import React from 'react'
import styles from './css/icon.module.scss'

class DeleteIcon extends React.Component {
  render() {
    return (
      <svg className={styles.icon} t="1658552930229" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="7575">
        <path
          d="M256 298.666667h512v554.666666H256V298.666667z m85.333333 85.333333v384h341.333334V384H341.333333z m42.666667 85.333333h85.333333v213.333334H384v-213.333334z m170.666667 0h85.333333v213.333334h-85.333333v-213.333334zM213.333333 298.666667h597.333334v85.333333H213.333333V298.666667z m170.666667-128h256v85.333333H384V170.666667z"
          fill="#303133" p-id="7576"></path>
      </svg>
    )
  }
}

export default DeleteIcon
