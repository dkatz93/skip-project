import React from 'react';
import axios from 'axios';

export const GET_BAR = 'GET_BAR';
export const GET_BARS = 'GET_BARS';
export const SET_FAV = 'SET_FAV';

export const getBars = function(bars){
	return {
		type: GET_BARS,
		bars
	}
};


export const loadBars = () =>{
	return(dispatch) =>{
		axios.get('/api/bars')
		.then(res=> {
			dispatch(getBars(res.data))
		})
		.catch(err => {
			console.log(err)
		})
	}
}

export const setFav = function(bar){
	return {
		type: SET_FAV,
		bar
	}
}

export const setFavorite = (barId) => {
	return(dispatch) => {
		axios.put(`/api/bars/${barId}`)
		.then(res => {
			dispatch(setFav(res.data))
		})
		.catch(err => {
			console.log(err)
		})
	}
}

export const getBar = function(selectedBar){
	return {
		type: GET_BAR,
		selectedBar
	}
};

export const loadBar = (barId) => {
	return(dispatch) => {
		axios.get(`/api/bars/${barId}`)
		.then( res => {
			console.log(res.data)
			dispatch(getBar(res.data))
		})
		.catch(err => {
			console.log(err)
		})
	}
}

