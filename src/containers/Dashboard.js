import React, { Component } from 'react'
import GoalCard from '../components/GoalCard'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'

class Dashboard extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    renderGoals = () => {
        return this.props.currentUser && this.props.currentUser.goals.map(goal => <GoalCard key={goal.id} {...goal}  />)
    }

    render() {
        
        return (
            <>
                <div>
                    <h2> Welcome to your dashboard, {this.props.currentUser && this.props.currentUser.username}</h2>
                    {this.renderGoals()}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser, 
        loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser })(Dashboard)
