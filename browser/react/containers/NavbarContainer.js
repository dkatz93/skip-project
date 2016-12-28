import React from 'react';
import {connect} from 'react-redux';
import  Navbar  from '../components/Navbar';
import {logoutUser} from '../action-creators/user-action-creator'


function mapStateToProps(state){
	return {
		selectedUser: state.selectedUser
	}
}

const mapDispatch = {logoutUser}

export default connect(mapStateToProps, mapDispatch)(Navbar)