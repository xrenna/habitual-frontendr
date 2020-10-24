function Habit (props) {

    return (
        <>
            <div className='habits-card__content' >
               <p>{props.name}</p>
               <p>Frequency: {props.frequency}</p>
               <p>Progress: {props.progress}</p>
            </div>
        </>
    );
  }
  
  export default Habit;
