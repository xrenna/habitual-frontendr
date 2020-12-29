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
        <div className='habit-cards'>
       { props.habits && props.habits.map(habit =>    
            <div key={habit.id} className='habits-card__content' >
               <div>{habit.name}</div>
               <div>
                <ProgressForm />
               </div>
               <div>
                <p>Frequency: {habit.frequency}</p>
                <p>Progress: {habit.progress}</p>
               </div>
               <span className='habit-svgs'>
                    <a href="#" onClick={() => props.populateHabitForm(habit)}>
                        <svg className="icon">
                            <use href={sprite + '#icon-edit'} />
                        </svg>
                    </a>
                
                    <a href='#' onClick={() => deleteHabit(habit)}>
                        <svg className="icon">
                            <use href={sprite + '#icon-trash'} />
                        </svg>
                    </a>
               </span>
            </div>
            )
       }
       </div>
        </>
    );
  }
  
  export default connect(null, { deleteHabit })(Habit);
