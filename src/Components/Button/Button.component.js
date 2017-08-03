import React from 'react'
import PropTypes from 'prop-types'
import './Button.component.css'

export const Button = ({ children, onClick }) => {
  return (
    <div className='p-btn' onClick={ onClick }>
      { children }
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
}
