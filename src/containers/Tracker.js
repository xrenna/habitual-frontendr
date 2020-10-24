import React, { Component } from 'react'
import GoalsSidebar from './GoalsSidebar'
import Habits from './Habits'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'

class Tracker extends Component {
    state = {
        showHabit: false,
        id: null 
    }

    componentDidMount(){
        this.props.getCurrentUser()
    }

    renderHabits = (id) => {
        console.log('am habits')
        return this.props.currentUser && this.props.currentUser.goals.filter(goal => id === goal.id ? 
            <section className='habits-card' key={goal.id}>
            <Habits {...goal} />
            </section> : 
            console.log('logic bad?'))
    }

    onClick = (id) => {
        this.setState({
            showHabit: true,
            id: id 
          });
    }
    

    render() {
        console.log(this.state)
        return (
            <div className = 'tracker-content'>
                <nav className = 'sidebar--goals'><GoalsSidebar onClick={this.onClick} goals ={this.props.currentUser && this.props.currentUser.goals}/></nav>
                {this.state.showHabit ? <div className='habits-container'>{this.renderHabits(this.state.id)}</div> : 'im not showing'}
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

