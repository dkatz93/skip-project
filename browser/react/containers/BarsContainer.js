import React from 'react';
import store from '../store'
import {connect} from 'react-redux';
import FilterableBars from '../components/FilterableBars';
import {setFavorite} from '../action-creators/bar-action-creator'

function mapStateToProps(state){
	return {
		bars: state.bars
	}
}

const mapDispatch = {setFavorite}

export default connect(mapStateToProps, mapDispatch)(FilterableBars)