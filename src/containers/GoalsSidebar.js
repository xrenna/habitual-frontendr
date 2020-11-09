import Goals from '../components/Goals'

 function GoalsSidebar (props) {
        
        const renderGoals = () => {
            return props.goals && props.goals.map(goal => <li className='side-nav__item' onClick={() => props.onClick(goal.id)} key={goal.id}><Goals {...goal}/></li>)
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

export default GoalsSidebar
