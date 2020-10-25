import React, { Component } from 'react'
import GoalsSidebar from './GoalsSidebar'
import Habit from '../components/Habit'
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
        const habitObj = this.props.currentUser && this.props.currentUser.goals.filter(goal => id === goal.id) 
        const habit = habitObj.map(habit => 
                                    <section className='habits-card' key={habit.id}>
                                        <Habit {...habit} />
                                    </section> )    

        return habit; 
        
    }

    onClick = (id) => {
        this.setState({
            showHabit: true,
            id: id 
          });
    }
    

    render() {
        return (
            <div className = 'tracker-content'>
                <nav className = 'sidebar--goals'><GoalsSidebar onClick={this.onClick} goals ={this.props.currentUser && this.props.currentUser.goals}/></nav>
                {this.state.showHabit ? <div className='habits-container'>{this.renderHabits(this.state.id)}</div> : null}
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

