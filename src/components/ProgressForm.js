import React, { Component } from 'react'

export default class ProgresshtmlForm extends Component {
    render() {
        return (
           
            <div className="weekdays-selector">
                <input type="checkbox" id="weekday-mon" className="weekdays-selector__input" />
                <label htmlFor="weekday-mon">M</label>
                <input type="checkbox" id="weekday-tue" className="weekdays-selector__input" />
                <label htmlFor="weekday-tue">T</label>
                <input type="checkbox" id="weekday-wed" className="weekdays-selector__input" />
                <label htmlFor="weekday-wed">W</label>
                <input type="checkbox" id="weekday-thu" className="weekdays-selector__input" />
                <label htmlFor="weekday-thu">T</label>
                <input type="checkbox" id="weekday-fri" className="weekdays-selector__input" />
                <label htmlFor="weekday-fri">F</label>
                <input type="checkbox" id="weekday-sat" className="weekdays-selector__input" />
                <label htmlFor="weekday-sat">S</label>
                <input type="checkbox" id="weekday-sun" className="weekdays-selector__input" />
                <label htmlFor="weekday-sun">S</label>
            </div>
           
        )
    }
}
