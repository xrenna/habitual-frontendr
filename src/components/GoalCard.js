import HabitList from '../components/HabitList'

function GoalCard (props) {

    const renderHabits = () => {
        return props && props.habits.map(habit => <li className='card__side--li'><HabitList key={habit.id} {...habit}/></li>)
    }

    return (
        <>
            <div className='card__side card__side--front'>
                <h3 className='card__heading'>{props.name}</h3>
            </div>
            <div className='card__side card__side--back'>
                <header className='heading-tertiary heading-tertiary--card'>{props.name}'s Habits</header>
                <ul className='card__side--details'>
                    {renderHabits()}
                </ul>
            </div>
        </>
    );
  }
  
  export default GoalCard;
  