import React from 'react'

import AppHeader from "../app-header"
import SearchPanel from "../search-panel"
import PostStatusFilter from "../post-status-filter"
import PostList from "../post-list"
import PostAddForm from "../post-add-form"
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

const App = () => {

    const data = [
        {label: "Going to learn react", id: 'asdqw', important: true},
        {label: "That is so good", id: 'sada', important: false},
        {label: "I need a break...", id: 'qqqww', important: false},
    ]

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
            {/* <WhoAmI name="Vielen" surname="Danke" link="google.com" years={29}/> */}
        </AppBlock>
    )
}

export default App;