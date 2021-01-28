import Goals from '../components/Goals'
import { connect } from 'react-redux'
import { deleteGoal } from '../actions/goals'
import sprite from '../imgs/sprite.svg'


 const GoalsSidebar = (props) => {

    const deleteGoal = (goal) => {
        props.deleteGoal(goal.id)
      }

        const renderGoals = () => {
            return props.goals && props.goals.map(goal => 
                    <li className='side-nav__item' 
                        onClick={() => props.onClick(goal.id)} key={goal.id}>              
                        <Goals key={goal.id} {...goal}/>
                        <span>
                            <span className='side-nav__icon'>
                                <a href='#top' onClick={() => deleteGoal(goal)}>
                                    <svg className="icon icon--trash">
                                        <use href={sprite + '#icon-trash'} />
                                    </svg>
                                </a>    
                            </span>
                            <span>
                                <a href='#top' onClick={() => props.populateForm(goal)}>
                                    <svg className="icon icon--edit">
                                        <use href={sprite + '#icon-edit'} />
                                    </svg>
                                </a>
                            </span>
                        </span>
                    </li>
                )
                
        }

        return (
            <>
            <ul className = 'side-nav'>
                {renderGoals()}
            </ul>
            <span>
                <a href="#center" onClick={props.openNewGoalModal}>
                    <svg className="icon icon--add">
                        <use href={sprite + '#icon-plus'} />
                    </svg>
                </a>
                <span className= 'heading-tertiary'>ADD GOAL</span>
            </span>
            </>
        )
   
}

export default connect(null, { deleteGoal })(GoalsSidebar);
