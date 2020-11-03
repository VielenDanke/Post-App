import React, { Component } from 'react'

import AppHeader from "../app-header"
import SearchPanel from "../search-panel"
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list"
import PostAddForm from "../post-add-form"
import nextId from "react-id-generator"
// import WhoAmI from "./stateWork"

import "./app.css"
import styled from 'styled-components'

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
                {label: "Going to learn react", id: 1, important: false, like: false},
                {label: "That is so good", id: 2, important: false, like: false},
                {label: "I need a break...", id: 3, important: false, like: false}
            ],
            term: "",
            filter: "all"
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
        this.setState(({data}) => {
            const newArray = [...data, newItem]
            return {
                data: newArray
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const newItem = {...data[index], important: !data[index].important}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const newItem = {...data[index], like: !data[index].like}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onFilterData = (items, text) => {
        if (text.length === 0) {
            return items;
        }
        return items.filter(item => item.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
    }

    filterPost = (items, filter) => {
        if (filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter: filter})
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    render() {
        const {data, term, filter} = this.state

        const liked = data.filter(item => item.like === true).length
        const allPosts = data.length

        const visiblePosts = this.filterPost(this.onFilterData(data, term), filter)

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    />
                <PostAddForm onAdd={this.addItem}/>
                {/* <WhoAmI name="Vielen" surname="Danke" link="google.com" years={29}/> */}
            </AppBlock>
        )
    }
}