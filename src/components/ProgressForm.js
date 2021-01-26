import { connect } from 'react-redux'
import { updateProgressCount } from '../actions/habits'

const ProgressForm = (props) => {
        const btnToggle = (event) => {
        let progressCount = Object.values(props.completed_this_week).filter(day => day === true).length
        
        props.updateProgressCount({
            [event.target.name]: event.target.value, progress: progressCount, habitId: props.id
        })
    }

        return (
            <div className="weekdays-selector">
                <button onClick={(event) => btnToggle(event)} className='btn btn--weekday' name='Monday' value={props.completed_this_week.Monday} style={props.completed_this_week.Monday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>M</button >
                <button onClick={(event) => btnToggle(event)} className='btn btn--weekday' name='Tuesday' value={props.completed_this_week.Tuesday} style={props.completed_this_week.Tuesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >         
                <button onClick={(event) => btnToggle(event)} className='btn btn--weekday' name='Wednesday' value={props.completed_this_week.Wednesday} style={props.completed_this_week.Wednesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>W</button >
                <button onClick={(event) => btnToggle(event)} className='btn btn--weekday' name='Thursday' value={props.completed_this_week.Thursday} style={props.completed_this_week.Thursday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >
                <button onClick={(event) => btnToggle(event)} className='btn btn--weekday' name='Friday' value={props.completed_this_week.Friday} style={props.completed_this_week.Friday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>F</button >
                <button onClick={(event) => btnToggle(event)} className='btn btn--weekday' name='Saturday' value={props.completed_this_week.Saturday} style={props.completed_this_week.Saturday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button >
                <button onClick={(event) => btnToggle(event)} className='btn btn--weekday' name='Sunday' value={props.completed_this_week.Sunday} style={props.completed_this_week.Sunday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button>
            </div>
        )
    }

export default connect( null, { updateProgressCount })(ProgressForm)
