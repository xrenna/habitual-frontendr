import React, { Component } from 'react'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Header from '../components/Header'
import NavBar from '../components/Navbar'

class Home extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render() {
        return (
            
            <>
            { this.props.loggedIn ? <NavBar currentUser={this.props.currentUser} history={this.props.history}/> : null}
            
            <Header history={this.props.history}/>
            </>
        )
    } 
}


const mapStateToProps = state => {
    return({
        loggedIn: !!state.currentUser,
        currentUser: state.currentUser
    })
  }
  
  export default connect(mapStateToProps, { getCurrentUser })(Home)