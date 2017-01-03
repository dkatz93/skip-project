import {GET_USERS, CREATE_USER, REMOVE_USER, SET_CURRENT_USER, UPDATE_USER, LOGOUT_USER, logoutUser, getUsers, createUser, removeUser, update, setUser} from '../action-creators/user-action-creator';

const initialState = {
  selectedUser: {}
}

export default function(state=initialState, action){
  const newState = Object.assign({}, state)
  switch(action.type){
    // case CREATE_USER: 
    //  newState.users = [action.user, ...newState.users]
    //  break;
    // case REMOVE_USER: 
    //  newState.users.filter(user => user.id !== action.id)
    //  break;
    case UPDATE_USER: 
      newState.users.map(user => {
        action.user.id === user.id ? action.user : user
      })
      break;
    case SET_CURRENT_USER: 
      newState.selectedUser = action.selectedUser
      break;
    // case LOGOUT_USER: 
    //  newState.selectedUser = state.selectedUser
    //  break;
    default:
      return state;
  }
  return newState
}