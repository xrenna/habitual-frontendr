import Goals from '../components/Goals'

 function GoalsSidebar (props) {
        
        const renderGoals = () => {
            return props.goals && props.goals.map(goal => <li className='side-nav__item' key={goal.id}><Goals {...goal}/></li>)
        }

        return (
            <ul className = 'side-nav'>
                {renderGoals()}
            </ul>
        )
   
}

export default GoalsSidebar
