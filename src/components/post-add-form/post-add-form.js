import React, { Component } from 'react'

import "./post-add-form.css"

export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onValueChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }
    
    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="What are you thinking about"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                        Add Post
                </button>
            </form>
        )
    }
}