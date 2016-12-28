import React from 'react';
import {connect} from 'react-redux';
import  Login  from '../components/Login';
import {setCurrentUser} from '../action-creators/user-action-creator'

function mapStateToProps(state){
	return {
		selectedUser: state.selectedUser
	}
}

const mapDispatch = {setCurrentUser}

export default connect(mapStateToProps, mapDispatch)(Login)