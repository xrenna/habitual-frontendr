import React, { Component } from 'react'
import GoalCard from '../components/GoalCard'
import Logout from '../components/Logout'
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
                { this.props.loggedIn ? <><p>Logged in as {this.props.currentUser.username}</p><Logout/></> : null}
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
