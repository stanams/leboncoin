import React from 'react'
import { shallow } from 'enzyme'
import { PostsList } from './PostsList.component'
import { PostsListItem } from '../PostsListItem/PostsListItem.component'


describe('<PostsList />', () => {
  it('renders wihtout crashing', () => {
    const posts = [{id: 1, content: "hey", public: true}, {id: 2, content: "ho", public: false}]
    const postsList = shallow(<PostsList posts={ posts }/>)
  })

  it('renders an unordered lists of posts', () => {
    const posts = [{id: 1, content: "hey", public: true}, {id: 2, content: "ho", public: false}]
    const postsList = shallow(<PostsList posts={ posts }/>)
    const postsListItem1 = shallow(<PostsListItem post={ posts[0] }/>)
    const postsListItem2 = shallow(<PostsListItem post={ posts[1] }/>)
    expect(postsList.find('ul').length).toBe(1)
    expect(postsList.find(PostsListItem).length).toBe(2)
  })

})