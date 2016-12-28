import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  updateInput(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  login(e) {
    e.preventDefault();
    axios.post('/api/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(user => {
      this.props.setCurrentUser(user)
      console.log(this.props)
      console.log('userid',user.id)
      window.location.href = `/bars`
    })
    .catch(err => console.log('theres an error in the server'));
  }

  render() {
    return (
      <div>
        <form className="login-form" onSubmit={this.login.bind(this)}>
          <h1>Login</h1>
          <div className="form-group" id="login-form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
              onChange={this.updateInput.bind(this, 'email')} 
              value={this.state.email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email" />
          </div>
          <div className="form-group" id="login-form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.updateInput.bind(this,'password')}
              value={this.state.password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
