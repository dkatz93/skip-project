import React from 'react';
import store from '../store'
import {connect} from 'react-redux';
import BarButtons from '../components/BarButtons';
import {setFavorite} from '../action-creators/bar-action-creator'

function mapStateToProps(state){
	return {
		bars: state.bars
	}
}

const mapDispatch = {setFavorite}

export default connect(mapStateToProps, mapDispatch)(BarButtons)