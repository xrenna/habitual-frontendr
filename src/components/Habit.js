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
        <button onClick={() => props.openNewHabitModal(props.id)}> + </button>
       { props.habits && props.habits.map(habit =>    
            <div key={habit.id} className='habits-card__content' >
               <p>{habit.name}</p>
               <ProgressForm/>
               <p>Frequency: {habit.frequency}</p>
               <p>Progress: {habit.progress}</p>
               <span><a href="#" onClick={() => props.populateHabitForm(habit)}>
                    <svg className="icon">
                        <use href={sprite + '#icon-edit'} />
                    </svg>
               </a></span>
               <span><a onClick={() => deleteHabit(habit)}>
                    <svg className="icon">
                        <use href={sprite + '#icon-trash'} />
                    </svg>
               </a></span>
            </div>
            )
       }
        </>
    );
  }
  
  export default connect(null, { deleteHabit })(Habit);
