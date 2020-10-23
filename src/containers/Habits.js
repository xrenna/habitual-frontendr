import Habit from '../components/Habit'

function Habits (props) {

    const renderHabits = () => {
        return props.habits && props.habits.map(habit => <Habit key={habit.id} {...habit}/>)
    }

    console.log(props.habits)

    return (
        <>
            <div >
               {renderHabits()}
            </div>
        </>
    );
  }
  
  export default Habits;