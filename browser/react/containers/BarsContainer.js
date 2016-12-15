import React from 'react';
import store from '../store'
import {connect} from 'react-redux';
import FilterableBars from '../components/FilterableBars';

function mapStateToProps(state){
	return {
		bars: state.bars
	}
}

export default connect(mapStateToProps)(FilterableBars)