import React, { Component } from 'react'
import GoalsSidebar from './GoalsSidebar'
import HabitsList from './HabitsList'
import GoalsModal from '../components/GoalsModal'
import HabitsModal from '../components/HabitsModal'
import { getCurrentUser } from '../actions/currentUser'
import { addGoal, editGoal } from '../actions/goals'
import { addHabit, editHabit } from '../actions/habits'
import { connect } from 'react-redux'
import Loader from 'react-loaders'



class Tracker extends Component {
    state = {
        showHabit: false,
        id: null,  
        goalModal: false,
        modal: false, 
        form: {
            id: null,
            name: ''
        } ,

        habitForm: {
            id: null, 
            name: '',
            frequency: ''
        }
    }

    componentDidMount(){
        this.props.getCurrentUser()
    }

    toggleGoalModal = () => this.setState({goalModal: !this.state.goalModal})
    toggleModal = () => this.setState({modal: !this.state.modal})
    
    //GOAL FORM 

    onChange = (event) => {
        const { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form, 
                [name]: value
            }
            
        })
    }

    onSubmit = () => {
        if (this.state.form.id) {
            this.props.editGoal(this.state.form)
          } else {
            this.props.addGoal(this.state.form)
          }
       
        this.setState({
          goalModal: false,
          form: {
            id: null, 
            name: ''
          }
        })
      }
    

      openNewGoalModal = () => {this.setState({
          goalModal: true, 
          form: {
              name: ''
          }
      })
    }

      populateForm = (goal) => this.setState({
          goalModal: true, 
          form: {
              id: goal.id, 
              name: goal.name
          }
      })

      // HABITS

     renderHabits = (id) => {
        const habitObj = this.props.currentUser && this.props.currentUser.goals.filter(goal => id === goal.id) 
        const habit = habitObj.map(habit => 
                                    <section className='habits-card-container' key={habit.id}>
                                        <HabitsList {...habit}
                                        openNewHabitModal={this.openNewHabitModal} 
                                        populateHabitForm={this.populateHabitForm}
                                        />
                                    </section> )    

        return habit; 
    }

    onClick = (id) => {
        this.setState({
            showHabit: true,
            id: id 
          });
    }

      habitChange = (event) => {
        const { name, value } = event.target
        this.setState({
            habitForm: {
                ...this.state.habitForm, 
                [name]: value
            }
            
        })}

        habitSubmit = () => {
            // e.preventDefault()
            if (this.state.habitForm.id) {
                this.props.editHabit(this.state.habitForm)
              } else {
                this.props.addHabit(this.state.habitForm)
              }
           
            this.setState({
              modal: false,
              habitForm: {
                id: null, 
                name: '',
                frequency: ''
              }
            })
          }

    openNewHabitModal = (id) => {
        this.setState({
            modal: true, 
            habitForm: {
                name: '',
                frequency: '',
                goal_id: id 
            }
        })
    }
  
        populateHabitForm = (habit) => this.setState({
            modal: true, 
            habitForm: {
                id: habit.id, 
                name: habit.name,
                frequency: habit.frequency
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
                    <div className='habits-container'>
                        {this.renderHabits(this.state.id)}
                    </div> : 
                        <div className='habits-container'>
                            <div className='habits-info'>
                                <h3 className='heading-secondary'>Welcome to your Habit Tracker, {this.props.currentUser && this.props.currentUser.username}</h3>
                                <p>Click on your goals on the left side of the page to view your habits. Feel free to add new goals and habits here.</p>
                            </div>
                        </div>}
                    </div>
            <GoalsModal toggle={this.toggleGoalModal} {...this.state.form} display={this.state.goalModal} onChange={this.onChange} onSubmit={this.onSubmit}/>
            <HabitsModal toggle={this.toggleModal} {...this.state.habitForm} display={this.state.modal} onChange={this.habitChange} onSubmit={this.habitSubmit}/>
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

export default connect(mapStateToProps, { getCurrentUser, addGoal, editGoal, addHabit, editHabit })(Tracker)



