import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant, children}) => {
  return (
    <Alert variant={variant ?? 'info'}>
        {children}
    </Alert>
  )
}

export default Message