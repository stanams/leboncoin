import React from 'react'
import { shallow } from 'enzyme'
import { PostForm } from './PostForm.component'


describe('<PostForm />', () => {
  it('renders wihtout crashing', () => {
    const postForm = shallow(<PostForm/>)
  })

  it('renders textarea', () => {
    const postForm = shallow(<PostForm/>)
    expect(postForm.find('textarea').length).toBe(1)
  })

  it('changes value on input', () => {
    const postForm = shallow(<PostForm/>)
    expect(postForm.state().inputValue.length).toBe(0)
    postForm.setState({ inputValue: 'hey' }, () => {
      expect(postForm.state().inputValue.length).toBe(3)
      expect(postForm.state('inputValue')).toEqual('hey')
    })
  })

})