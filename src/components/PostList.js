import React, { Component } from 'react'

import './PostList.css'
import profile from '../assets/profile.jpg'

import Post from './Post'

class PostList extends Component {
    state = this.props.posts

    handleLike = id => {
      const likedPost = this.state.posts.find(p => p.id === id)
      likedPost.likes++
      this.setState({})
    }

    handleDislike = id => {
      const dislikedPost = this.state.posts.find(p => p.id === id)
      dislikedPost.dislikes++
      this.setState({})
    }
    
    render() {
        return (
            <div id="post-list">
                {this.state.posts.map(post => 
                    <Post
                        key={post.id} 
                        post={post}
                        onLike={() => this.handleLike(post.id)}
                        onDislike={() => this.handleDislike(post.id)}
                    />
                )}
            </div>
        )
    }
}

export default PostList