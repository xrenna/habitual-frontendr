import Habit from '../components/Habit'

function Habits (props) {

    const renderHabits = () => {
        return props.habits && props.habits.map(habit => <div key={habit.id}><Habit {...habit}/></div>)
    }

    console.log(props.habits)

    return (
        <>
               {renderHabits()}
        </>
    );
  }
  
  export default Habits;