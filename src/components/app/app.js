import React, { Component } from 'react'

import AppHeader from "../app-header"
import SearchPanel from "../search-panel"
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list"
import PostAddForm from "../post-add-form"
// import WhoAmI from "./stateWork"

import "./app.css"
import styled from 'styled-components'
import nextId from "react-id-generator";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

// const StyledAppBlock = styled(AppBlock)`
//     background-color: grey;
// `

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {label: "Going to learn react", id: 1, important: true},
                {label: "That is so good", id: 2, important: false},
                {label: "I need a break...", id: 3, important: false}
            ]
        }
    }

    deleteItem = (id) => {
        console.log(id)
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        const newId = nextId("post-id")
        const newItem = {
            label: body,
            important: false,
            id: newId
        }
        console.log(newItem)
        this.setState(({data}) => {
            const newArray = [...data, newItem]
            return {
                data: newArray
            }
        })
    }

    render() {
        const {data} = this.state

        return (
            <AppBlock>
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={data} onDelete={this.deleteItem}/>
                <PostAddForm onAdd={this.addItem}/>
                {/* <WhoAmI name="Vielen" surname="Danke" link="google.com" years={29}/> */}
            </AppBlock>
        )
    }
}