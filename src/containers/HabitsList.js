import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteHabit } from '../actions/habits'
import sprite from '../imgs/sprite.svg'
import ProgressForm from '../components/ProgressForm'


const HabitsList = (props) => {

    const deleteHabit = (habit) => {
        props.deleteHabit(habit.id)
      }

        return (
            <>
        <button className='btn btn--small u-margin-bottom-small' onClick={() => props.openNewHabitModal(props.id)}> + </button>
       { props.habits && props.habits.map(habit =>     
            <div className='habits-card' key={habit.id} >
               <div className='habits-card__title'>
                    <h2>{habit.name}</h2>
                    <h4>{habit.frequency} days/week</h4>
               </div>
               <hr width="1" size="40"></hr>
               <div className='habits-card__progress-form'>
                    <ProgressForm {...habit} />
               </div>
               <hr width="1" size="40"></hr>
               <div className='habits-card__right'>
                    <div className='habits-card__progress'>
                        <p>Progress:</p>
                        <p>{habit.progress}/{habit.frequency}</p>
                    </div>
                    <div className='habits-card__svgs'>
                        <a href="#" onClick={() => props.populateHabitForm(habit)}>
                            <svg className="icon--habit">
                                <use href={sprite + '#icon-edit'} />
                            </svg>
                        </a>
                    
                        <a href='#' onClick={() => deleteHabit(habit)}>
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

  
  export default connect(null, { deleteHabit })(HabitsList);
