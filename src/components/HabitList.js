function HabitList (props) {
    return (
        <span>
            <span>{props.name}</span> - progress:
            <span>{props.progress}</span>
        </span>
    );
  }
  
  export default HabitList;
