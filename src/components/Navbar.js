import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Logout from '../components/Logout'


class NavBar extends Component {

  

  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <Logout />
      </div>
    )
  }
}
const mapStateToProps = state => {
    return({
        loggedIn: !!state.currentUser,
        currentUser: state.currentUser
    })
  }
  
export default connect(mapStateToProps, { getCurrentUser })(NavBar)