import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'


export default class NavBar extends Component {

  onClick = (url) => {
    this.props.history.push(url)
}
  render() {
    return (
      <nav>
        <p>Logged in as {this.props.currentUser.username}</p>
        <NavLink to="/dashboard" onClick={() => this.onClick('/dashboard')}>Dashboard</NavLink>
        <Logout />
      </nav>
    )
  }
}