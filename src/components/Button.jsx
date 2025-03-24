import React from 'react'

function Button({lable ,classname }) {
  return (
    <button className={classname}>
      {lable}
    </button>
  )
}

export default Button
