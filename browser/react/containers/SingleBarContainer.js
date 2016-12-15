import React from 'react';
import {connect} from 'react-redux';
import  OneBar  from '../components/OneBar';

function mapStateToProps(state){
	return {
		selectedBar: state.selectedBar
	}
}

export default connect(mapStateToProps)(OneBar)