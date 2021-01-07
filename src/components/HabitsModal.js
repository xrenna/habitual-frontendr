import React from 'react'
import { useForm } from "react-hook-form"


export default function HabitsModal(props){

    const { register, handleSubmit, watch, errors } = useForm();

    const display = props.display ? 'block' : 'none'

    return (
        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal__content">
                <span onClick={props.toggle} className="close">&times;</span>
                <form className='form' onSubmit={handleSubmit(props.onSubmit)}>  
                    <div className='form__group'>                 
                        <input placeholder="Habit Name" className='form__input' type="text" name="name" ref={register({ required: true })}  onChange={props.onChange} value={props.name}/>
                        {errors.name && errors.name.type === 'required' && <span>This field is required</span>}
                        <label htmlFor="name" className="form__label u-margin-left-small">Habit Name </label>
                    </div>
                    <div className='form__group'> 
                        <input placeholder="Frequency(per week)" className='form__input' type="number" name="frequency" ref={register({ required: true, min: 1, max: 7  })} onChange={props.onChange} value={props.frequency}/>
                        {errors.frequency && errors.frequency.type === 'required' && <span>This field is required</span>}
                        {errors.frequency && errors.frequency.type === 'min' && <span>Minimum of 1</span>}
                        {errors.frequency && errors.frequency.type === 'max' && <span>There are only 7 days in a week!</span>}
                        <label htmlFor="frequency" className="form__label u-margin-left-small">Habit Frequency(per week)</label>
                    </div>
                    <input className='btn btn--small u-margin-left-small'type="submit" value="Submit" />
                </form>
            </div>
        </div> 
    )
}