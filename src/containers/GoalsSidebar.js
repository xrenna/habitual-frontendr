import Goals from '../components/Goals'

 function GoalsSidebar (props) {
        
        const renderGoals = () => {
            return props.goals && props.goals.map(goal => <button className='side-nav__item' onClick={() => props.onClick(goal.id)} key={goal.id}><Goals {...goal}/></button>)
        }

        return (
            <ul className = 'side-nav'>
                {renderGoals()}
            </ul>
        )
   
}

export default GoalsSidebar
