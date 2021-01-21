import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/goals'

const Filters = (props) => {


    return(
        <form className='form form--small'>
            <div className='form__group'>
                <input placeholder='Search Goals By Name' className='form__input form__input--small'type="text" name="search" value={props.search} onChange={props.handleSearchFormChange}></input> 
            </div>
        </form>
        )
}
const mapStateToProps = state => ({
    ...state.goals.filtersForm
  })


export default connect(mapStateToProps, { handleSearchFormChange })(Filters)