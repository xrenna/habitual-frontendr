import React from 'react'


export default function GoalsModal(props){
    const display = props.display ? 'block' : 'none'

    return (
        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal-content">
                <span onClick={props.toggle} className="close">&times;</span>
                <form onSubmit={props.onSubmit}>
                    <label>
                    Goal Name: 
                    <input type="text" name="name"  onChange={props.onChange} value={props.name}/>
                    </label>
                </form>
            </div>
        </div> 
    )
}