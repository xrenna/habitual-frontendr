import React, { Component } from 'react'

export default class Button extends Component {
    state = {
        challenge: ''
    }

    onClick = () => {
        this.setState(prevState => ({
            challenge: prevState.challenge + 'x'
        }))
    }

    render() {
        return (
            <button onClick={this.onClick}>
                Challenge Rating: {this.state.challenge}
            </button>
        )
    }
}
