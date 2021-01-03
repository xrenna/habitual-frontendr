import React from 'react'


export default function HabitsModal(props){
    const display = props.display ? 'block' : 'none'

    return (
        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal__content">
                <span onClick={props.toggle} className="close">&times;</span>
                <form className='form' onSubmit={props.onSubmit}>  
                    <div className='form__group'>                 
                        <input placeholder="Habit Name" className='form__input' type="text" name="name"  onChange={props.onChange} value={props.name}/>
                        <label htmlFor="name" className="form__label u-margin-left-small">Habit Name: </label>
                    </div>
                    <div className='form__group'> 
                        <input placeholder="Frequency(per week)" className='form__input' type="number" name="frequency"  onChange={props.onChange} value={props.frequency}/>
                        <label htmlFor="frequency" className="form__label u-margin-left-small">Habit Frequency(per week):</label>
                    </div>
                    <input className='btn btn--small u-margin-left-small'type="submit" value="Submit" />
                </form>
            </div>
        </div> 
    )
}