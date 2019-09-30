import React, { Component } from 'react'

import './PostBox.css'

class PostBox extends Component {
    state = {
        content: ''
    }

    handleChange = e => {
        this.setState({ content: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            content: ''
        })
        const { onCreatePost } = this.props
        onCreatePost(this.state.content)
    }

    render() {
        return (
            <div id="post-box" className="animated fadeIn slow">
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        placeholder="No que você está pensando?" 
                        value={this.state.content} 
                        onChange={this.handleChange}>
                    </textarea>

                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default PostBox