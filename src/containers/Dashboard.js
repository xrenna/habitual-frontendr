import React, { Component } from 'react'
import GoalCard from '../components/GoalCard'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'

class Dashboard extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render() {
        return (
            <div>
                <GoalCard />
            </div>
        )
    }
}

export default connect(null, { getCurrentUser })(Dashboard)
