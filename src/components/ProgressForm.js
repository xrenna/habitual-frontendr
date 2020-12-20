import React, { Component } from 'react'

export default class ProgressForm extends Component {
    render() {
        return (
           
            <div class="weekDays-selector">
                <input type="checkbox" id="weekday-mon" class="weekday" />
                <label for="weekday-mon">M</label>
                <input type="checkbox" id="weekday-tue" class="weekday" />
                <label for="weekday-tue">T</label>
                <input type="checkbox" id="weekday-wed" class="weekday" />
                <label for="weekday-wed">W</label>
                <input type="checkbox" id="weekday-thu" class="weekday" />
                <label for="weekday-thu">T</label>
                <input type="checkbox" id="weekday-fri" class="weekday" />
                <label for="weekday-fri">F</label>
                <input type="checkbox" id="weekday-sat" class="weekday" />
                <label for="weekday-sat">S</label>
                <input type="checkbox" id="weekday-sun" class="weekday" />
                <label for="weekday-sun">S</label>
            </div>
           
        )
    }
}
