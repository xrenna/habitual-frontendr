import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser.js'


class Login extends Component {

  state = {
    username: '',
    password: ''
}

onChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value})
}

onSubmit = e => {
    e.preventDefault()
    this.props.login(this.state, this.props.history)
    this.setState({
        username: '',
        password: ''
    })
}

  render() {
    return (
      <div className='auth-form-container'>
        <form className='auth-form u-margin-top-huge' onSubmit={this.onSubmit}>
          <div class="u-margin-bottom-medium">
            <h2 class="heading-secondary">
                Login 
            </h2>
          </div>
          <div class="auth-form__group">
            <input className='auth-form__input' placeholder="username" value={this.state.username} name="username" type="text" onChange={this.onChange} />
            <label for="username" class="auth-form__label">Username</label>
          </div>
          <div class="auth-form__group">
            <input className='auth-form__input' placeholder="password" value={this.state.password} name="password" type="password" onChange={this.onChange} />
            <label for="password" class="auth-form__label">Password</label>
          </div> 
          <div class="auth-form__group">
            <input className='btn ' type="submit" value="Log In"/>
          </div>
            
        </form>
      </div>
    )
  }
}

export default connect(null, { login })(Login)

