import React from 'react';
import {Link} from 'react-router';

export default function(props){
	const bar = props.selectedBar
	return (
		<div className="outside-singleBar">
			<h1 className="bar-title">{bar.name}
			<button className="singleBar-favorite">
        {bar.favorite? 
        	<span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
    	 		:
    	 		<span className="glyphicon glyphicon-heart-empty" aria-hidden="true">
    	 		</span>
   			}
      </button>
      </h1>
	  	<div className="bar-info-wrap">
		  	<div id="bar-img-wrapper">
		      <img className="imgStyle" id="individ-bar-pic" src={ bar.imgURL }/>
		    </div>
		    <div className="barInfo">
		    	<p>{bar.rating}</p>
		    </div>
		  </div>
		</div>
	)
}