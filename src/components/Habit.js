import { connect } from 'react-redux'
import { deleteHabit } from '../actions/habits'

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
               <p>Frequency: {habit.frequency}</p>
               <p>Progress: {habit.progress}</p>
               <span><button onClick={() => props.populateHabitForm(habit)}>Edit</button></span>
               <span><button onClick={() => deleteHabit(habit)}>Delete</button></span>
            </div>
            )
       }
        </>
    );
  }
  
  export default connect(null, { deleteHabit })(Habit);
