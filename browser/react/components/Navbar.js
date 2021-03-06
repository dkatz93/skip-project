import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  renderLoginSignup() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
         <Link to="/signup" activeClassName="active">Signup</Link>
        </li>
        <li>
          <Link to="/login" activeClassName="active">Login</Link>
        </li>
      </ul>
    );
  }

  logoutClick(){
    this.props.logoutCurrentUser()
    window.location.href = '/login'

  }


  renderLogout() {
    const name = this.props.bars[0].users[0].name.charAt(0).toUpperCase() + this.props.bars[0].users[0].name.slice(1)
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>{/*<Link to="/bars" activeClassName="active">*/}
          <div className = "welcomeName">
            Welcome, {name}
          </div>
        </li>
        <li>
        <button className="navbar-btn btn btn-default"
                  onClick={this.logoutClick.bind(this)}>Logout
                </button>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand clearfix" to="/"><span className="glyphicon glyphicon-forward"></span><span> S K I P </span></Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/bars" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/account" activeClassName="active">Account</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </li>
          </ul> 
          { this.props.bars[0] ?
            this.renderLogout() :
            this.renderLoginSignup()}
        </div>
      </nav>
    );
  }
}

export default Navbar;