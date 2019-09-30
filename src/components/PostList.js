import React, { Component } from 'react'

import './PostList.css'

import Post from './Post'

class PostList extends Component {
    handleLike = id => {
        this.props.onLike(id)
    }

    handleDislike = id => {
        this.props.onDislike(id)
    }

    handleRemove = id => {
        this.props.onRemove(id)
    }
    
    render() {
        return (
            <div id="post-list">
                {this.props.data.posts.length === 0 && <p align="center" className="placeholder-post-list">Nenhum post a exibir</p>}

                {this.props.data.posts.map(post => 
                    <Post
                        key={post.id} 
                        post={post}
                        onLike={() => this.handleLike(post.id)}
                        onDislike={() => this.handleDislike(post.id)}
                        onRemove={() => this.handleRemove(post.id)}
                    />
                )}
            </div>
        )
    }
}

export default PostList