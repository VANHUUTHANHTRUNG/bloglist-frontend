import React from 'react'

const Notification = ({ message, flag }) => {
  const notificationStyle = {
    color: flag === 'error' ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
  }

  if (message === null) {
    return null
  }

  return <div style={notificationStyle}>{message}</div>
}

export default Notification
