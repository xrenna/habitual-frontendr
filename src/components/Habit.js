function Habit (props) {
    
    return (
        <>
       { props.habits && props.habits.map(habit => 
            <div key={habit.id}>
            <div className='habits-card__content' >
               <p>{habit.name}</p>
               <p>Frequency: {habit.frequency}</p>
               <p>Progress: {habit.progress}</p>
            </div>
            </div>)
       }
        </>
    );
  }
  
  export default Habit;
