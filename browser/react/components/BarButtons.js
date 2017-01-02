import React from 'react';
import {Link} from 'react-router';
import FilterableBars from './FilterableBars';
import axios from 'axios'

class BarButtons extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			filtered:  [...this.props.bars]
		}
	}

	componentDidMount() {
    axios.get('/api/bars')
      .then(res => this.setState({ filtered: res.data }))
  }

  handleClickDistance(e){
  	e.preventDefault()
  	var filteredResults = this.props.bars
  	.sort((a, b)=> {
  		if (a.distance > b.distance) {
  			return 1
  		}
  		if (a.distance < b.distance) {
  			return -1
  		}
  		return 0;
  	})
  	this.setState({
  		filtered: filteredResults
  	})

  }

  handleClickFavs(e){
  	e.preventDefault()
  	var filteredResults = this.props.bars.filter((bar)=> {
  			return bar.users[0].favorite.favorite
  		})
  	this.setState({
  		filtered: filteredResults
  	})
  }


	render(){
		return (
			<div>
	    	<div className="sorting">
	    		<button type="button" className="sort" onClick={this.handleClickDistance.bind(this)}>
	    			Distance
	    		</button>
	    		<button type="button" className="sort" onClick={this.handleClickFavs.bind(this)}>
	    			Favorites
	    		</button>
	    		<button type="button" className="sort">
	    			Wait Time
	    		</button>
	    	</div>
				<FilterableBars bars={this.state.filtered} setFavorite={this.props.setFav} loadBars={this.props.getBars}/>
			</div>
		)

		
	}
}

export default BarButtons