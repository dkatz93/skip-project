import React from 'react';
import {connect} from 'react-redux';
import  OneBar  from '../components/OneBar';
import {getDistance, setFavorite, updateWait, setWait} from '../action-creators/bar-action-creator'

function mapStateToProps(state){
	return {
		selectedBar: state.selectedBar
	}
}

function mapDispatchToProps(dispatch){
	return {
		setFav: (bar) => dispatch(setFavorite(bar)),
		updateWait: (bar, waitData) => dispatch(setWait(bar, waitData))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(OneBar)