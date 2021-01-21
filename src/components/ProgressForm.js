import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProgressCount } from '../actions/habits'

class ProgressForm extends Component {

    // state = {
    //     Monday: false, 
    //     Tuesday: false, 
    //     Wednesday: false, 
    //     Thursday: false, 
    //     Friday: false, 
    //     Saturday: false,
    //     Sunday: false,
    //     count: 0, 
    // }

    btnToggle = (event) => {
        let progressCount = Object.values(this.props.completed_this_week).filter(day => day === true).length
        
        // console.log(![event.target.value])
        // console.log(progressCount)
        
        this.props.updateProgressCount({
            [event.target.name]: event.target.value, progress: progressCount, habitId: this.props.id
        })
        
    }

    render() {
        // let progressCount = Object.values(this.props.completed_this_week).filter(day => day === true).length
        // console.log(this.props.completed_this_week.Wednesday)
        return (
           
            <div className="weekdays-selector">
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Monday' value={this.props.completed_this_week.Monday} style={this.props.completed_this_week.Monday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>M</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Tuesday' value={this.props.completed_this_week.Tuesday} style={this.props.completed_this_week.Tuesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >         
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Wednesday' value={this.props.completed_this_week.Wednesday} style={this.props.completed_this_week.Wednesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>W</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Thursday' value={this.props.completed_this_week.Thursday} style={this.props.completed_this_week.Thursday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Friday' value={this.props.completed_this_week.Friday} style={this.props.completed_this_week.Friday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>F</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Saturday' value={this.props.completed_this_week.Saturday} style={this.props.completed_this_week.Saturday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Sunday' value={this.props.completed_this_week.Sunday} style={this.props.completed_this_week.Sunday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button>
            </div>
           
        )
    }

    
}

export default connect( null, { updateProgressCount })(ProgressForm)
