import React, { Component } from 'react'

export default class ProgressForm extends Component {
    render() {
        return (
           
            <div class="weekdays-selector">
                <input type="checkbox" id="weekday-mon" class="weekdays-selector__input" />
                <label for="weekday-mon">M</label>
                <input type="checkbox" id="weekday-tue" class="weekdays-selector__input" />
                <label for="weekday-tue">T</label>
                <input type="checkbox" id="weekday-wed" class="weekdays-selector__input" />
                <label for="weekday-wed">W</label>
                <input type="checkbox" id="weekday-thu" class="weekdays-selector__input" />
                <label for="weekday-thu">T</label>
                <input type="checkbox" id="weekday-fri" class="weekdays-selector__input" />
                <label for="weekday-fri">F</label>
                <input type="checkbox" id="weekday-sat" class="weekdays-selector__input" />
                <label for="weekday-sat">S</label>
                <input type="checkbox" id="weekday-sun" class="weekdays-selector__input" />
                <label for="weekday-sun">S</label>
            </div>
           
        )
    }
}
