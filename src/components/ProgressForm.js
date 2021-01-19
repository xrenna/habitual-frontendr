import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProgressCount } from '../actions/habits'

class ProgressForm extends Component {

    state = {
        Monday: false, 
        Tuesday: false, 
        Wednesday: false, 
        Thursday: false, 
        Friday: false, 
        Saturday: false,
        Sunday: false,
        count: 0, 
    }

    btnToggle = (event) => {

        this.setState({
            [event.target.name]: !this.state[event.target.name]
        })
        // this.progressCount()
    }

    render() {
        this.progressCount()
        return (
           
            <div className="weekdays-selector">
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Monday' value={this.state.Monday} style={this.state.Monday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>M</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Tuesday' value={this.state.Tuesday} style={this.state.Tuesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >         
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Wednesday' value={this.state.Wednesday} style={this.state.Wednesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>W</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Thursday' value={this.state.Thursday} style={this.state.Thursday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Friday' value={this.state.Friday} style={this.state.Friday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>F</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Saturday' value={this.state.Saturday} style={this.state.Saturday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Sunday' value={this.state.Sunday} style={this.state.Sunday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button>
            </div>
           
        )
    }

    progressCount = () => {
        let progressCount = Object.values(this.state).filter(day => day === true).length
        this.props.updateProgressCount({ progress: progressCount }, this.props.id)
        console.log(progressCount)
    }
}

export default connect( null, { updateProgressCount })(ProgressForm)
