import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import store from '../store'

class AllBars extends React.Component {
	constructor(props){
		super(props)
	}


	handleFavoriteClick(bar, e){
		e.preventDefault()
		console.log(this.props)
		this.props.setFavorite(bar.id)

		// let bool = !this.props.bar.users[0].favorite.favorite
		// axios.put()
		// this.setState({this.state.bar.favorite: bool})
	}

	render(){
		const bars = this.props.bars
		return (
			<div>
				<div className="bar-wrapper">
					<div className="row">
						{ 
							bars && bars.map((bar, i) => {
								return(
									<div className="col-xs-3" key={i}>
									<div className ="thumbnail" id="thumbnailID">
			              <Link to={`/bars/${bar.id}`}>
			                <div className ="imgWrapperStyle">
			                  <img className="imgStyle" src={ bar.imgURL }/>
			                </div>
			                <div className="caption">
			                  <h5 className="captionVals">
			                    <span>{ bar.name }</span>
			                  </h5>
			                  <small className="captionVals">Wait: {bar.wait ? bar.wait + " minutes" : "No data"} </small>
			                </div>
			              </Link>
			                <button 
			                	onClick = {this.handleFavoriteClick.bind(this, bar)}
			                	className="favorite">
			                	{
			                		bar.users[0].favorite.favorite ? <span className="glyphicon glyphicon-heart" aria-hidden="true">
			                	 		</span>
			                	 		:
			                	 		<span className="glyphicon glyphicon-heart-empty" aria-hidden="true">
			                	 		</span>
			                	}
			                </button>
			              </div>
			            </div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default AllBars