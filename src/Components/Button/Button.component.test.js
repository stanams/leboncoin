import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './Button.component'


describe('<Button />', () => {
  it('renders wihtout crashing', () => {
    const button = shallow(<Button/>)
  })

  it('renders text', () => {
    const text = 'POSTER'
    const button = shallow(<Button>{ text }</Button>)
    expect(button.contains(text)).toEqual(true)
  })

  it('defined a submit action', () => {
    const submit = jest.fn()
    const button = shallow(<Button>POSTER</Button>)
    expect(button.props().submit).toBeDefined
  })

  it('call submit on click', () => {
    const submit = jest.fn()
    const button = shallow(<Button onClick={ submit }>POSTER</Button>)
    button.simulate('click')
    expect(submit).toHaveBeenCalled
  })

})