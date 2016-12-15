import React from 'react';
import Navbar from './Navbar';

const Home = (props) => (
  <div id="main" className="container-fluid">
    <Navbar />
    { props.children && React.cloneElement(props.children, props) }
  </div>
);

export default Home;
