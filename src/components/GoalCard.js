import HabitList from '../components/HabitList'

function GoalCard (props) {

    const renderHabits = () => {
        return props && props.habits.map(habit => <HabitList key={habit.id} {...habit}/>)
    }

    return (
        <>
            <div className='card__side card__side--front'>
                <h3 className='card__heading'>{props.name}</h3>
            </div>
            <div className='card__side card__side--back'>
                <h5 className='card__details'>{props.name}'s Habits</h5>
                <ul>
                    <li>{renderHabits()}</li>
                </ul>
            </div>
        </>
    );
  }
  
  export default GoalCard;
  