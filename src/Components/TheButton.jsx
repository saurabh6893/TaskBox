import React from 'react'

function TheButton({ children, version, type, isDisabled }) {
  return (
    <button className={`btxx ${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}

TheButton.defaultProps = {
  version: 'incomplete',
  type: 'button',
  isDisabled: true,
}

export default TheButton
