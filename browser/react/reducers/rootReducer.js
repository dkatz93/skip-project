import {GET_BARS, GET_BAR, getBars, getBar, SET_FAV, setFav} from '../action-creators/bar-action-creator';

import {GET_USERS, CREATE_USER, REMOVE_USER, SET_CURRENT_USER, UPDATE_USER, LOGOUT_USER, logoutUser, getUsers, createUser, removeUser, update, setUser} from '../action-creators/user-action-creator';

const initialState = {
	bars: [],
	selectedBar: {},
	selectedUser: {}
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
		// case CREATE_USER: 
		// 	newState.users = [action.user, ...newState.users]
		// 	break;
		// case REMOVE_USER: 
		// 	newState.users.filter(user => user.id !== action.id)
		// 	break;
		case UPDATE_USER: 
			newState.users.map(user => {
				action.user.id === user.id ? action.user : user
			})
			break;
		case SET_CURRENT_USER: 
			newState.selectedUser = action.user
			break;
		case LOGOUT_USER: 
			newState.selectedUser = state.selectedUser
			break;
		case SET_FAV:
			newState.selectedBar = action.selectedBar
		default:
			return state;
	}
	return newState
}