import React from 'react'
import { shallow } from 'enzyme'
import { PostsListItem } from './PostsListItem.component'

describe('<PostsListItem />', () => {
  it('renders wihtout crashing', () => {
    const post = {id: 1, content: "hey", public: true}
    const postsListItem = shallow(<PostsListItem post={ post }/>)
  })

  it('renders a post item', () => {
    const post = {id: 1, content: "hey", public: true}
    const postsListItem = shallow(<PostsListItem post={ post }/>)
    expect(postsListItem.find('li').length).toBe(1)
  })

})