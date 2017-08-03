import React from 'react'
import PropTypes from 'prop-types'
import './Toggle.component.css'
import Toggle from 'react-toggle'

export const ToggleSwitch = ({ checked, switchToggle }) => {
  return (
    <label>
      <span>Privé</span>
      <Toggle
        icons={ false }
        checked={ checked }
        onChange={ switchToggle }/>
      <span>Public</span>
    </label>
  )
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  switchToggle: PropTypes.func
}
