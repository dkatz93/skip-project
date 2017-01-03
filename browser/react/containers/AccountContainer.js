import React from 'react';
import store from '../store'
import {connect} from 'react-redux';
import Account from '../components/Account';


function mapStateToProps(state){
	return {
		selectedUser: state.selectedUser,
		selectedBar: state.selectedBar
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

// const mapDispatch = {setFavorite, loadBars}

export default connect(mapStateToProps, mapDispatchToProps)(Account)