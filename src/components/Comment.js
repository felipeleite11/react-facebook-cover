import React, { Component } from 'react'

import './Comment.css'

class Comment extends Component {
    render() {
        const { comment } = this.props

        return (
            <div className="comment">
                <div className="comment-profile-container">
                    <img src={comment.author.avatar} className="comment-profile" />
                </div> 

                <div className="comment-content">
                    <p>
                        <span className="comment-name">
                            {comment.author.name}
                        </span>
                        {comment.content} 
                    </p>
                </div>

            </div>
        )
    }
}

export default Comment