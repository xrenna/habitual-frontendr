import React, { Component } from 'react'
import GoalsSidebar from './GoalsSidebar'
import Habits from './Habits'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'

class Tracker extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render() {
        return (
            <div className = 'tracker-content'>
                <nav className = 'sidebar--goals'><GoalsSidebar goals ={this.props.currentUser && this.props.currentUser.goals}/></nav>
                <Habits />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser, 
        loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser })(Tracker)

