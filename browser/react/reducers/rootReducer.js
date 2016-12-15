import {GET_BARS, GET_BAR, getBars, getBar} from '../action-creators/bar-action-creator'

const initialState = {
	bars: [],
	selectedBar: {}
}

export default function(state=initialState, action){
	const newState = Object.assign({}, state)
	switch(action.type){
		case GET_BARS:
			newState.bars = action.bars;
			break;
		case GET_BAR:
			newState.selectedBar = action.selectedBar;
			break;
		default:
			return state;
	}
	return newState
}