import React from 'react';
import axios from 'axios';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      birthday: '',
      locationSharing: false,
      address: ''
    }
  }

  createUser(e) {
    e.preventDefault();
    // axios.post('/api/users', {
    //   email: this.state.email,
    //   name: this.state.name,
    //   password: this.state.password,
    //   phone: this.state.phone,
    //   birthday: this.state.birthday,
    //   locationSharing: this.state.locationSharing,
    //   address: this.state.address
    // })
    // .then(res => window.location.href = '/posts')
    // .then(user => console.log(user));
  }

  updateInput(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Sign up</h1>
          <form onSubmit={this.createUser.bind(this)}>
            <div className="form-group" id="login-form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={this.state.email}
                onChange={this.updateInput.bind(this, 'email')}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
            </div>
            <div className="form-group" id="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                value={this.state.password}
                onChange={this.updateInput.bind(this, 'password')}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password" />
            </div>
            <div className="form-group" id="login-form-group">
              <label htmlFor="confirmation_password">Confirm Password</label>
              <input
                value={this.state.confirmPassword}
                onChange={this.updateInput.bind(this, 'confirmPassword')}
                type="password"
                className="form-control"
                id="confirmation_password"
                placeholder="Password" />
            </div>
            <div className="form-group" id="login-form-group">
              <label htmlFor="name">Name</label>
              <input
                value={this.state.name}
                onChange={this.updateInput.bind(this, 'name')}
                type="name"
                className="form-control"
                id="name"
                placeholder="Name" />
            </div>
            <div className="form-group" id="login-form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                value={this.state.phoneNumber}
                onChange={this.updateInput.bind(this, 'phoneNumber')}
                type="phoneNumber"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone Number" />
            </div>
            <div className="form-group" id="login-form-group">
              <label htmlFor="birthday">Birthday</label>
              <input
                value={this.state.birthday}
                onChange={this.updateInput.bind(this, 'birthday')}
                type="birthday"
                className="form-control"
                id="birthday"
                placeholder="Birthday" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account & Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm

