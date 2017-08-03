import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  ToggleSwitch
} from '../index'

import './PostForm.component.css'

export class PostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      isPrivate: true
    }
  } 

  onInputChange(e) {
    e.preventDefault()
    this.setState({ inputValue: e.target.value })
  }

  switchToggle() {
    this.setState({ isPrivate: !this.state.isPrivate })
  }

  submitForm() {
    this.state.inputValue !== '' && this.props.onSubmit(this.state.inputValue, this.state.isPrivate)
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <form className='p-form'>
        <div className='p-form__input-wrapper'>
          <textarea onChange={ (e) => this.onInputChange(e) }
                    value={ this.state.inputValue }/>
        </div>
        <div className='p-form__submit-section'>
          <ToggleSwitch checked={ this.state.isPrivate } switchToggle={ this.switchToggle.bind(this) }/>
          <Button onClick={ this.submitForm.bind(this) }>
            POSTER
          </Button>
        </div>
      </form>
    )
  }
}

PostForm.propTypes = {
  onSubmit: PropTypes.func
}