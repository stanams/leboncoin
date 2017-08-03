import React from 'react'
import PropTypes from 'prop-types'
import './PostsList.component.css'
import { PostsListItem } from '../PostsListItem/PostsListItem.component'
export const PostsList = ({ posts }) => {
  return (
    <ul className='p-list'>
      {
        posts.map(post => 
          <PostsListItem post={ post } key={ post.id }/>
        )
      }
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array
}