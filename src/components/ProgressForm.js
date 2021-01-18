import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProgressCount } from '../actions/habits'
// //     let progressCount = Object.values(this.state).filter(day => day === true).length
    //     let habit = this.props.habit && this.props.habit.id 
    //     this.props.updateProgressCount({ progress: progressCount }, this.props.id)
    //     console.log(progressCount)

class ProgressForm extends Component {

    state = {
        count: 0, 
    }

    btnToggle = (event) => {

        this.setState({
            [event.target.name]: !this.state[event.target.name]
        })
        // this.progressCount()
    }

    render() {
        let progressCount = Object.values(this.state).filter(day => day === true).length
        // this.progressCount()
        return (
           
            <div className="weekdays-selector">
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Monday' value={this.state.monday} style={this.state.monday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>M</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Tuesday' value={this.state.tuesday} style={this.state.tuesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >         
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Wednesday' value={this.state.wednesday} style={this.state.wednesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>W</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Thursday' value={this.state.thursday} style={this.state.thursday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Friday' value={this.state.friday} style={this.state.friday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>F</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Saturday' value={this.state.saturday} style={this.state.saturday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='Sunday' value={this.state.sunday} style={this.state.sunday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button>
            </div>
           
        )
    }
    
}

export default connect( null, { updateProgressCount })(ProgressForm)


