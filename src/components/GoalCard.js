import HabitList from '../components/HabitList'

const GoalCard = (props) => {

    const renderHabits = () => {
        return props && props.habits.map(habit => <li className='card__side--li' key={habit.id}><HabitList {...habit}/></li>)
    }

    return (
        <>
            <div className='card__side card__side--front'>
                <h3 className='card__heading card-heading'>{props.name}</h3>
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
  