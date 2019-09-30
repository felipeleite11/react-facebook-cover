import React, { Component } from 'react'

import './Post.css'

import Comment from './Comment'
import PostFooter from './PostFooter'

class Post extends Component {
    render() {
        const { post, onLike, onDislike } = this.props

        return (
            <div className="post animated fadeIn">

                <div className="owner">
                    <div className="profile-image-container">
                        <img src={post.author.avatar} className="profile" />
                    </div>
                
                    <div className="identification">
                        <span className="name">
                            {post.author.name}
                        </span>

                        <span className="date">
                            {post.date}
                        </span>
                    </div>
                </div>

                <p className="post-content">
                    {post.content}
                </p>

                {post.comments.length > 0 && <hr />}

                {post.comments.map(comment => 
                    <Comment 
                        key={comment.id}
                        comment={comment}
                    />
                )}

                <hr />

                <PostFooter 
                    likes={post.likes}
                    dislikes={post.dislikes}
                    onLike={onLike}
                    onDislike={onDislike}
                />

            </div>
        )
    }
}

export default Post