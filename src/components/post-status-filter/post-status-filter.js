import React, { Component } from 'react'
// import { Button } from 'reactstrap'

import "./post-status-filter.css"

export default class PostStatusFilter extends Component {

    constructor(props) {
        super(props)
        this.buttons = [
            {name: "all", label: "All"},
            {name: "like", label: "Like"}
        ]
    }

    render() {
        const {filter, onFilterSelect} = this.props
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name
            const clazz = active ? "btn-info" : "btn-outline-secondary"
            return (
                <button 
                key={name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)}>
                {label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}