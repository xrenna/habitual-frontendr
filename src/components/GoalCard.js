import HabitList from '../components/HabitList'

function GoalCard (props) {

    const renderHabits = () => {
        return props && props.habits.map(habit => <HabitList key={habit.id} {...habit}/>)
    }

    return (
        <>
            <p>{props.name}</p>
            <li>{renderHabits()}</li>
        </>
    );
  }
  
  export default GoalCard;
  