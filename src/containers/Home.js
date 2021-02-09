import React, { Component } from 'react'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Features from '../components/Features'

class Home extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render() {
        return (
            <div className='page'>
                <Header history={this.props.history}/>
                <Features />
            </div>
        )
    } 
}
  
  export default connect(null, { getCurrentUser })(Home)