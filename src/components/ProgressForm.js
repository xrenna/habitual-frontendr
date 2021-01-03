import React, { Component } from 'react'

export default class ProgressForm extends Component {

    state = {
        monday: false, 
        tuesday: false, 
        wednesday: false, 
        thursday: false, 
        friday: false, 
        saturday: false,
        sunday: false
    }

    btnToggle = (event) => {
        this.setState({
        [event.target.name]: !this.state[event.target.name]
        })
    }

    render() {
        
        return (
           
            <div className="weekdays-selector">
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='monday' style={this.state.monday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>M</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='tuesday' style={this.state.tuesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >         
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='wednesday' style={this.state.wednesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>W</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='thursday' style={this.state.thursday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='friday' style={this.state.friday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>F</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='saturday' style={this.state.saturday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button >
                <button onClick={(event) => this.btnToggle(event)} className='btn btn--weekday' name='sunday' style={this.state.sunday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button>
            </div>
           
        )
    }
}
