import React from 'react';
import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const CREATE_USER = 'CREATE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGOUT_USER = 'LOGOUT_USER'

export const getUsers = users => {
	return {
		type: GET_USERS,
		users
	}
};

export const createUser = user => {
	return {
		type: CREATE_USER,
		user
	}
};

export const logoutUser = () => {
	return {
		type: LOGOUT_USER,
		null
	}
}

export const removeUser = id => {
	return {
		type: REMOVE_USER,
		id
	}
};

export const update = user => {
	return {
		type: UPDATE_USER,
		user
	}
};


export const setUser = user => {
	return {
		type: SET_CURRENT_USER,
		user
	}
};

export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
       .then(res => dispatch(getUsers(res.data)));
}

export const deleteUser = id => dispatch => {
  dispatch(removeUser(id))
  axios.delete(`/api/users/${id}`)
       .catch(err => console.error(`Removing user: ${id} unsuccesful`, err))
}


export const addUser = user => dispatch => {
  axios.post('/api/users', user)
       .then(res => dispatch(createUser(res.data)))
       .catch(err => console.error(`Creating user: ${user} unsuccesful`, err))
}


export const updateUser = user => dispatch => {
    axios.put(`/api/users/${id}`, user)
         .then(res => dispatch(update(res.data)))
         .catch(err => console.error(`Creating user: ${user} unsuccesful`, err))
}

export const setCurrentUser = user => dispatch => {
	axios.get(`/api/${user.id}/bars`, user)
	.then(res => dispatch(setUser(res.data)))
	.catch(err => console.error(`Setting user: ${user} unsuccesful`, err))
}

export const logoutCurrentUser = () => dispatch => {
	axios.get('/api/logout')
	.then(res => dispatch(logoutUser()))
	.catch(err => console.error('Unsuccessful logout attempt'))
}

