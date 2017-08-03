import React from 'react'
import PropTypes from 'prop-types'
import './PostsListItem.component.css'
import FaEye from 'react-icons/lib/fa/eye'
import FaEyeSlash from 'react-icons/lib/fa/eye-slash'

export const PostsListItem = ({ post }) => {
  
  return (
    <li className='p-list__item'>
      { post.content }
      <span className='p-list__item--privacy'>
        
        {
          post.public
          ? <div><FaEye/> public</div>
          : <div><FaEyeSlash/> privé</div>
        }
      </span>
    </li>
  )
}

PostsListItem.propTypes = {
  post: PropTypes.object
}
