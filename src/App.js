import React, { Component } from 'react'
import './App.css'
import postsData from './Data/data.json'

import {
  PostForm,
  PostsList
 } from './Components/index';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: postsData.posts
    }
  }

  onSubmit = (value, isPrivate) => {
    this.setState({
      posts: [
        {
          id: this.state.posts.length + 1,
          content: value,
          public: isPrivate
        },
        ...this.state.posts
      ]  
    })
  }

  render() {
    return (
      <div className='p-wrapper'>
        <h2 className='p-header'>Le Petit Coin</h2>
        <div className='p-body'>
          <PostForm onSubmit={ this.onSubmit }/>
          <PostsList posts={ this.state.posts }/>
        </div>
      </div>
    );
  }
}

export default App
