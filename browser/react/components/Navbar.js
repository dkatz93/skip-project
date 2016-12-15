import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    // this.renderLoginSignup = this.renderLoginSignup.bind(this);
    // this.renderLogout = this.renderLogout.bind(this);
  }

  // renderLoginSignup() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //        <Link to="/signup" activeClassName="active">Signup</Link>
  //       </li>
  //       <li>
  //         <Link to="/login" activeClassName="active">Login</Link>
  //       </li>
  //     </ul>
  //   );
  // }

  // renderLogout() {
  //   return (
  //     <ul className="nav navbar-nav navbar-right">
  //       <li>
  //       <button className="navbar-btn btn btn-default"
  //         onClick={this.props.logout}>Logout
  //       </button>
  //       </li>
  //     </ul>
  //   );
  // }

  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <Link class="navbar-brand clearfix" to="/"><span class="glyphicon glyphicon-forward"></span><span> S K I P </span></Link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <Link to="/bars" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </li>
          </ul> 
        </div>
      </nav>
    );
  }
}

export default Navbar;