import React from 'react';
import store from '../store'
import {connect} from 'react-redux';
import BarButtons from '../components/BarButtons';
import {setFavorite, loadBars} from '../action-creators/bar-action-creator'

function mapStateToProps(state){
	return {
		bars: state.bars
	}
}

function mapDispatchToProps(dispatch){
	return {
		setFav: (bar) => dispatch(setFavorite(bar)),
		getBars: () => dispatch(loadBars())
	}
}

// const mapDispatch = {setFavorite, loadBars}

export default connect(mapStateToProps, mapDispatchToProps)(BarButtons)