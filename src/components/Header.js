import React, { Component } from 'react'
import { getCurrentUser } from '../actions/currentUser'
import { connect } from 'react-redux'


class Header extends Component {

    onClick = (url) => {
        this.props.history.push(url)
    }

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
                    <button onClick={() => this.onClick('/signup')} className="btn">Sign up Now</button>
                    <button onClick={() => this.onClick('/login')} className="btn btn--small">Login</button>
                </div>
            </header>
        )
    }
}


export default connect(null, { getCurrentUser })(Header)