import React from 'react'
import { shallow } from 'enzyme'
import { ToggleSwitch } from './Toggle.component'

describe('<Toggle />', () => {
  it('renders wihtout crashing', () => {
    const toggle = shallow(<ToggleSwitch/>)
  })

  it('renders text', () => {
    const text1 = 'Privé'
    const text2 = 'Public'
    const toggle = shallow(<ToggleSwitch/>)
    expect(toggle.contains(text1)).toEqual(true)
    expect(toggle.contains(text2)).toEqual(true)
  })
})