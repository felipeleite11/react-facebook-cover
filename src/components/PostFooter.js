import React, { Component } from 'react'

import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io'

import './PostFooter.css'

class PostFooter extends Component {
    render() {
        const { likes, dislikes, onLike, onDislike } = this.props

        return (
            <>
                <button onClick={onLike}>
                    <IoMdThumbsUp />
                    <span className="badge">{likes}</span>
                </button>
                
                <button onClick={onDislike}>
                    <IoMdThumbsDown />
                    <span className="badge">{dislikes}</span>
                </button>
            </>
        )
    }
}

export default PostFooter