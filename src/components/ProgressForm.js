import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProgressCount } from '../actions/habits'

class ProgressForm extends Component {

    state = {
        monday: false, 
        tuesday: false, 
        wednesday: false, 
        thursday: false, 
        friday: false, 
        saturday: false,
        sunday: false,
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
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='monday' value={this.state.monday} style={this.state.monday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>M</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='tuesday' value={this.state.tuesday} style={this.state.tuesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >         
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='wednesday' value={this.state.wednesday} style={this.state.wednesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>W</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='thursday' value={this.state.thursday} style={this.state.thursday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='friday' value={this.state.friday} style={this.state.friday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>F</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='saturday' value={this.state.saturday} style={this.state.saturday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='sunday' value={this.state.sunday} style={this.state.sunday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button>
            </div>
           
        )
    }

    progressCount = () => {
        let progressCount = Object.values(this.state).filter(day => day === true).length
        let habit = this.props.habit && this.props.habit.id 
        this.props.updateProgressCount({progress: progressCount}, this.props.id)
        console.log(progressCount)
    }
}

export default connect( null, { updateProgressCount })(ProgressForm)
