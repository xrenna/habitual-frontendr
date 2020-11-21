import React from 'react'


export default function HabitsModal(props){
    const display = props.display ? 'block' : 'none'

    return (
        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal-content">
                <span onClick={props.toggle} className="close">&times;</span>
                <form onSubmit={props.onSubmit}>
                    <label>
                        Habit Name: 
                        <input type="text" name="name"  onChange={props.onChange} value={props.name}/>
                    </label>
                    <label>
                        Habit Frequency(per week): 
                        <input type="number" name="name"  onChange={props.onChange} value={props.name}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div> 
    )
}