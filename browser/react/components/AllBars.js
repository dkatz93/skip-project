import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'

class AllBars extends React.Component {
	constructor(props){
		super(props)
	}

	// handleFavoriteClick(e){
	// 	e.preventDefault()
	// 	let bool = !this.state.bar.favorite
	// 	axios.put()
	// 	this.setState({this.state.bar.favorite: bool})

	// }

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
			                  <small className="captionVals"> minutes</small>
			                </div>
			              </Link>
			                <button className="favorite">
			                	{
			                		bar.favorite? <span className="glyphicon glyphicon-heart" aria-hidden="true">
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