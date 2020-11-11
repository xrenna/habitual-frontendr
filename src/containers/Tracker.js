import React, { Component } from 'react'
import GoalsSidebar from './GoalsSidebar'
import Habit from '../components/Habit'
import GoalsModal from '../components/GoalsModal'
import { getCurrentUser } from '../actions/currentUser'
import { addGoal, editGoal } from '../actions/goals'
import { connect } from 'react-redux'

class Tracker extends Component {
    state = {
        showHabit: false,
        id: null,  
        modal: false,
        form: {
            id: null,
            name: ''
        } 
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

    toggleModal = () => this.setState({modal: !this.state.modal})
    
    onChange = (event) => {
        const { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form, 
                [name]: value
            }
            
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.form.id) {
            this.props.editGoal(this.state.form)
          } else {
            this.props.addGoal(this.state.form)
          }
       
        this.setState({
          modal: false,
          form: {
            id: null, 
            name: ''
          }
        })
      }

      openNewGoalModal = () => this.setState({
          modal: true, 
          form: {
              name: ''
          }
      })

      populateForm = (goal) => this.setState({
          modal: true, 
          form: {
              id: goal.id, 
              name: goal.name
          }
      })

    render() {
        return (
            <>
            <div className = 'tracker-content'>
                <nav className = 'sidebar sidebar--goals'>
                    <GoalsSidebar openNewGoalModal={this.openNewGoalModal} 
                                  populateForm={this.populateForm}
                                  onClick={this.onClick} 
                                  goals ={this.props.currentUser && this.props.currentUser.goals}/>
                </nav>
                {this.state.showHabit ? 
                    <div className='habits-container'>{this.renderHabits(this.state.id)}</div> : 
                        <div className='habits-container'>
                            <div className='habits-info'>
                                <h3>Welcome to your Habit Tracker, {this.props.currentUser && this.props.currentUser.username}</h3>
                                <p>Click on your goals on the left side of the page to view your habits. Feel free to add new goals and habits here.</p>
                            </div>
                        </div>}
                    </div>
            <GoalsModal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
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

export default connect(mapStateToProps, { getCurrentUser, addGoal, editGoal })(Tracker)

