import Goals from '../components/Goals'
import { connect } from 'react-redux'
import { deleteGoal } from '../actions/goals'


 function GoalsSidebar (props) {
    console.log(props)
    const deleteGoal = (goal) => {
        props.deleteGoal(goal.id)
      }

        const renderGoals = () => {
            return props.goals && props.goals.map(goal => 
                <li className='side-nav__item' 
                onClick={() => props.onClick(goal.id)} key={goal.id}>
                <Goals {...goal}/>
                <span><button onClick={() => props.populateForm(goal)}>Edit</button></span>
                <span><button onClick={() => deleteGoal(goal)}>Delete</button></span>
                </li>)
        }

        return (
            <>
            <ul className = 'side-nav'>
                {renderGoals()}
            </ul>
            <button onClick={props.openNewGoalModal}>+</button>
            </>
        )
   
}

export default connect(null, { deleteGoal })(GoalsSidebar);
