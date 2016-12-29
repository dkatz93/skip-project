import React from 'react';
import {Link} from 'react-router';
import AllBars from './AllBars'

class FilterableBars extends React.Component {
	constructor(props){
		super(props);
	}

  handleClickDistance(e){
  	e.preventDefault()
  	this.props.bars.sort((a, b)=> {
  		if (a.distance > b.distance) {
  			return 1
  		}
  		if (a.distance < b.distance) {
  			return -1
  		}
  		return 0;
  	})

  }

  handleClickFavs(e){
  	e.preventDefault()
  	this.props.bars.filter((bar)=> {
  		return bar.users[0].favorite.favorite
  	})
  }


	render(){

		const handleChange = this.handleChange
		var filteredBars;

		return (
			<div>
		    	<div className="sorting">
		    		<button type="button" className="sort">
		    			Distance
		    		</button>
		    		<button type="button" className="sort" onClick={filteredBars = this.handleClickFavs.bind(this)}>
		    			Favorites
		    		</button>
		    		<button type="button" className="sort">
		    			Wait Time
		    		</button>
		    	</div>
					<form className='form-group'>
		      	<input
		        	className='form-control'
		        	placeholder="Search for a bar here!"
		        	onChange={handleChange}
		      	/>
		    	</form>
				<AllBars bars={filteredBars} setFavorite={this.props.setFavorite}/>
			</div>
		)

		
	}
}

export default FilterableBars