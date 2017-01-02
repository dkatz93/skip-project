import React from 'react';
import {Link} from 'react-router';

class OneBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			inputValue: ''
		}
	}

	updateInput(e){
		this.setState({
			inputValue: e.target.value
		})
	}

	updateWaitTime(bar, e){
		e.preventDefault()
		this.props.updateWait(bar.id, {wait: this.state.inputValue})
	}

	handleFavoriteClick(bar, e){
		e.preventDefault()
		this.props.setFav(bar.id)
	}

	initMap(){
		var origin = this.props.selectedBar.users[0].address
		var destination = this.props.selectedBar.place.address

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
        console.log(response.rows[0].elements[0].distance.text)
        return response.rows[0].elements[0].distance.text
	      }
	  })
	}

	render(){
		const distance = this.initMap()
		const bar = this.props.selectedBar
		return (
				<div className="outside-singleBar">
					<h1 className="bar-title">{bar.name}
					<button className="singleBar-favorite" onClick = {this.handleFavoriteClick.bind(this, this.props.selectedBar)}>
		        {this.props.selectedBar.users[0].favorite.favorite ? 
		        	<span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
		    	 		:
		    	 		<span className="glyphicon glyphicon-heart-empty" aria-hidden="true">
		    	 		</span>
		   			}
		      </button>
		      </h1>   
				<div className="row">
			  	<div className="col-xs-3" id="bar-img-wrapper">
			      <img className="imgStyle" id="individ-bar-pic" src={ bar.imgURL }/>
			    </div>
			    <div className="col-xs-8" id="oneBarRight">
			    	<h4 className="barData">Distance: {distance}</h4>
			    	<h4 className="barData">Wait: {this.props.selectedBar.wait ? this.props.selectedBar.wait + " minutes" : "We don't have wait data for this bar right now. Sorry!"}</h4>
			    	<form className="form-inline" onSubmit={this.updateWaitTime.bind(this, this.props.selectedBar)}>
			    		<h4 className="waitHeader">Update Wait Time:</h4>
						  <div className="form-group">
						    <div className="input-group">
						      <input onChange={this.updateInput.bind(this)} type="text" className="form-control" placeholder="Time"/>
						      <div className="input-group-addon">mins</div>
						    </div>
						  </div>
						  <button type="submit" className="btn btn-primary">Submit</button>
						</form>
			    </div>
				 </div>
			</div> 
		)
	}
}

export default OneBar