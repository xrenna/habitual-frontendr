import React, { Component } from 'react'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Header from '../components/Header'

class Home extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render() {
        return (
            
            <>
            <Header history={this.props.history}/>
            </>
        )
    } 
}
  
  export default connect(null, { getCurrentUser })(Home)