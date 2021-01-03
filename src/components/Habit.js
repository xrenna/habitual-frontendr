import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteHabit } from '../actions/habits'
import sprite from '../imgs/sprite.svg'
import ProgressForm from './ProgressForm'

class Habit extends Component {

    state = {
        monday: false, 
        tuesday: false, 
        wednesday: false, 
        thursday: false, 
        friday: false, 
        saturday: false,
        sunday: false
    }

    btnToggle = (event) => {
        console.log(event.target.name)
        this.setState({
        [event.target.name]: !this.state[event.target.name]
        })
    }

    deleteHabit = (habit) => {
        this.props.deleteHabit(habit.id)
      }

    render() {
        return (
            <>
        <button className='btn btn--small u-margin-bottom-small' onClick={() => this.props.openNewHabitModal(this.props.id)}> + </button>
       { this.props.habits && this.props.habits.map(habit =>    
            <div key={habit.id} className='habits-card' >
               <div className='habits-card__title'>
                    <h2>{habit.name}</h2>
                    <h4>{habit.frequency} days/week</h4>
               </div>
               <hr width="1" size="40"></hr>
               <div className='habits-card__progress-form'>
                    <ProgressForm btnToggle={this.btnToggle} days={this.state}/>
               </div>
               <hr width="1" size="40"></hr>
               <div className='habits-card__right'>
                    <div className='habits-card__progress'>
                        <p>Progress:</p>
                        <p>{habit.progress}/{habit.frequency}</p>
                    </div>
                    <div className='habits-card__svgs'>
                        <a href="#" onClick={() => this.props.populateHabitForm(habit)}>
                            <svg className="icon--habit">
                                <use href={sprite + '#icon-edit'} />
                            </svg>
                        </a>
                    
                        <a href='#' onClick={() => this.deleteHabit(habit)}>
                            <svg className="icon--habit">
                                <use href={sprite + '#icon-trash'} />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            )
       }
        </>
        )
    }
}
  
  export default connect(null, { deleteHabit })(Habit);
