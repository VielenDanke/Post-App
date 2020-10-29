import React, {Component} from 'react'

class WhoAmI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: props.years
        }
        // this.incrYear = this.incrYear.bind(this)
        // this.incrYear = () => {
        //     this.setState(state => ({
        //         years: ++state.years
        //     }))
        // }
    }

    incrYear = () => {
        this.setState(state => ({
            years: ++state.years
        }))
    }

    // incrYear() {
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }

    render() {
        const {name, surname, link} = this.props
        const {years} = this.state
        return (
            <>
                <button onClick={this.incrYear}>Increment the year</button>
                <h1>Name is: {name}, surname is: {surname}, years - {years}</h1>
                <a href={link}>My link</a>
            </>
        )
    }
}

export default WhoAmI