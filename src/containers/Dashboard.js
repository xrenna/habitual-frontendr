import React, { Component } from 'react'
import GoalCard from '../components/GoalCard'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Loader from 'react-loaders'



class Dashboard extends Component {
    
    componentDidMount(){
        this.props.getCurrentUser()
    }

    renderGoals = () => {
        return this.props.currentUser && this.props.currentUser.goals.map(goal => <div className='card' key={goal.id}><GoalCard {...goal}  /></div>)
    }

    render() {
        
        return (
            <>

                <div className='dashboard'>
                    <h1 className='heading-secondary'> Welcome to your dashboard, {this.props.currentUser && this.props.currentUser.username}</h1>
                        <section className='cards'>{this.renderGoals()}</section>
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
