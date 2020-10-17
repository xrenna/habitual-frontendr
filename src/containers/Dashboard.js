import React, { Component } from 'react'
import GoalCard from '../components/GoalCard'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'

class Dashboard extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    renderGoals = () => {
        return this.props.currentUser && this.props.currentUser.goals.map(goal => <div className='card'><GoalCard key={goal.id} {...goal}  /></div>)
    }

    render() {
        
        return (
            <>
                <div className='dashboard'>
                    <h1> Welcome to your dashboard, {this.props.currentUser && this.props.currentUser.username}</h1>
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
