import React, { Component } from 'react'

export default class ProgressForm extends Component {
    render() {
        
        return (
           
            <div className="weekdays-selector">
                <button onClick={(event) => this.props.btnToggle(event)} className='btn btn--weekday' name='monday' style={this.props.days.monday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>M</button >
                <button onClick={(event) => this.props.btnToggle(event)} className='btn btn--weekday' name='tuesday' style={this.props.days.tuesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >         
                <button onClick={(event) => this.props.btnToggle(event)} className='btn btn--weekday' name='wednesday' style={this.props.days.wednesday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>W</button >
                <button onClick={(event) => this.props.btnToggle(event)} className='btn btn--weekday' name='thursday' style={this.props.days.thursday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>T</button >
                <button onClick={(event) => this.props.btnToggle(event)} className='btn btn--weekday' name='friday' style={this.props.days.friday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>F</button >
                <button onClick={(event) => this.props.btnToggle(event)} className='btn btn--weekday' name='saturday' style={this.props.days.saturday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button >
                <button onClick={(event) => this.props.btnToggle(event)} className='btn btn--weekday' name='sunday' style={this.props.days.sunday ? {backgroundColor:'#fd8500'} : {backgroundColor:'#eee'}}>S</button>
            </div>
           
        )
    }
}
