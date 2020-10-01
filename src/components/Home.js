import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <header className="header">
                <div className='header__text-box'>
                    <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Habitual</span>
                    <span className='heading-primary--sub'>A place for change</span>
                    </h1>
                </div>
                
                <div className='header__btn'>
                    <button className="btn">Sign up Now</button>
                </div>
            </header>
        )
    }
}
