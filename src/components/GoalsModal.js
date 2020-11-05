import React from 'react'


export default function GoalsModal(props){
    const display = props.display ? 'block' : 'none'

    return (
        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal-content">
                <span onClick={toggle} className="close">&times;</span>
                <form onSubmit={onSubmit}>
                    <label>
                    Image URL:
                    <input type="text" name="image"  onChange={onChange} value={image}/>
                    </label>
                </form>
            </div>
        </div> 
    )
}