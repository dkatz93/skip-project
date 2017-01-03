import React from 'react';
import axios from 'axios';

export const GET_BAR = 'GET_BAR';
export const GET_BARS = 'GET_BARS';
export const SET_FAV = 'SET_FAV';
export const GET_DIST = 'GET_DIST';
export const UPDATE_WAIT = 'UPDATE_WAIT'

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

export const setFav = function(selectedBar){
	return {
		type: SET_FAV,
		selectedBar
	}
}

export const setFavorite = (barId) => {
	return(dispatch) => {
		axios.put(`/api/bars/${barId}/fav`)
		.then(res => {
			console.log('setfav resdata', res)
			dispatch(setFav(res.data))
		})
		.catch(err => {
			console.log(err)
		})
	}
}

export const updateWait = function(wait){
	return {
		type: UPDATE_WAIT,
		wait
	}
}

export const setWait = (barId, waitData) => {
	return(dispatch) => {
		axios.put(`/api/bars/${barId}/wait`, waitData)
		.then(res => {
			console.log(waitData)
			console.log('updatewait resdata', res)
			dispatch(updateWait(res.data))
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

export const getDist = function(distance){
	return {
		type: GET_DIST,
		distance
	}
};

export function initMap(bar){
	console.log('bar', bar)
	var origin = bar.users[0].address
	var destination = '77 West Huron St.'
	// this.props.selectedBar.address

	var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        return response.rows[0].elements[0].distance.text
	      }
	  })
	}


export const getDistance = (bar) =>{
	return(dispatch) =>{
		var distance = initMap(bar)
		console.log('get dist',distance)
		dispatch(getDist(distance))
	}
}

