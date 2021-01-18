import { connect } from 'react-redux'
import { handleSearchFormChange } from '../actions/goals'

const Filters = (props) => {


    return(
        <form>
            <div>
                <label>Search: </label>
                <input type="text" name="search" value={props.search} onChange={props.handleSearchFormChange}></input> 
            </div>
            <input type="submit" value="Submit" />
        </form>
        )
}
const mapStateToProps = state => ({
    ...state.goals.filtersForm
  })


export default connect(mapStateToProps, { handleSearchFormChange })(Filters)