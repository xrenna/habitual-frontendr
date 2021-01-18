import React, { Component } from 'react'
import GoalCard from '../components/GoalCard'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'
import Filters from '../components/Filters'



class Dashboard extends Component {
    
    componentDidMount(){
        this.props.getCurrentUser()
    }

    searchedGoals =  () => this.props.currentUser.goals.filter(goal => goal.name.toLowerCase().includes(this.props.search.toLowerCase()))

    renderGoals = () => {
        return this.searchedGoals().map(goal => <div className='card' key={goal.id}><GoalCard {...goal}  /></div>)
    }

    render() {
        
        return (
            <>
            <h1 className='heading-secondary'> Welcome to your dashboard, {this.props.currentUser && this.props.currentUser.username}</h1>
                <Filters/>
                <div className='dashboard'>
                        <section className='cards'>{this.renderGoals()}</section>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser, 
        loggedIn: !!state.currentUser,
        search: state.goals.filtersForm.search
    }
}

export default connect(mapStateToProps, { getCurrentUser })(Dashboard)
