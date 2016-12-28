import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';

const Home = (props) => (
  <div id="main" className="container-fluid">
    <NavbarContainer />
    { props.children && React.cloneElement(props.children, props) }
  </div>
);

export default Home;
