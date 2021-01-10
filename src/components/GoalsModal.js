import React from 'react'
import { useForm } from "react-hook-form"


export default function GoalsModal(props){

    const { register, handleSubmit, errors } = useForm();

    const display = props.display ? 'block' : 'none'

    return (
        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal__content">
                <span onClick={props.toggle} className="close">&times;</span>
                <form className='form' onSubmit={handleSubmit(props.onSubmit)}>
                    <div className='form-group'>
                        <input className='form__input'
                               placeholder="Goal Name" 
                               type="text" 
                               name="name" 
                               ref={register({ required: true, maxLength: 14 })} 
                               onChange={props.onChange} 
                               value={props.name}/>
                        {errors.name && errors.name.type === 'required' && <span>This field is required</span>}
                        {errors.name && errors.name.type === 'maxLength' && <span>Maxium of 14 characters</span>}
                        <label htmlFor="name" className="form__label u-margin-left-small">Goal Name</label>
                    </div>
                    <input className='btn btn--small u-margin-left-small' type="submit" value="Submit" />
                </form>
            </div>
        </div> 
    )
}