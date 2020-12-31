import { connect } from 'react-redux'
import { deleteHabit } from '../actions/habits'
import sprite from '../imgs/sprite.svg'
import ProgressForm from './ProgressForm'

function Habit (props) {

    const deleteHabit = (habit) => {
        props.deleteHabit(habit.id)
      }

    return (
        <>
        <button className='btn btn--small u-margin-bottom-small' onClick={() => props.openNewHabitModal(props.id)}> + </button>
       { props.habits && props.habits.map(habit =>    
            <div key={habit.id} className='habits-card' >
               <div className='habits-card__title'>
                    <h2>{habit.name}</h2>
                    <h4>{habit.frequency} days/week</h4>
               </div>
               <div className='habits-card__progress-form'>
                    <ProgressForm />
               </div>
                <div className='habits-card__progress'>
                    <p>Progress:</p>
                    <p>{habit.progress}/{habit.frequency}</p>
                </div>
                <div className='habit-card__svgs'>
                    <a className='habit-card__svgs--icon' href="#" onClick={() => props.populateHabitForm(habit)}>
                        <svg className="icon">
                            <use href={sprite + '#icon-edit'} />
                        </svg>
                    </a>
                
                    <a className='habit-card__svgs--icon' href='#' onClick={() => deleteHabit(habit)}>
                        <svg className="icon">
                            <use href={sprite + '#icon-trash'} />
                        </svg>
                    </a>
                </div>
            </div>
            )
       }
        </>
    );
  }
  
  export default connect(null, { deleteHabit })(Habit);
