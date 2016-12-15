import React from 'react';
import {Link} from 'react-router';
import AllBars from './AllBars'

class FilterableBars extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue: ''
		};

		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(e){
  	this.setState({
  		inputValue: e.target.value
  	})
  }

  handleClickDistance(e){
  	e.preventDefault()
  	this.probs.bars.sort((a, b)=> {
  		if (a.distance > b.distance) {
  			return 1
  		}
  		if (a.distance < b.distance) {
  			return -1
  		}
  		return 0;
  	})

  }

  // handleClickFavs(e){

  // }

  // handleClickWait(e){

  // }

	render(){

		const handleChange = this.handleChange
		const filteredBars = this.props.bars.filter(bar => {
				return bar.name.toLowerCase().match(this.state.inputValue)
			})

		return (
			<div>
		    	<div className="sorting">
		    		<button type="button" className="sort">
		    			Distance
		    		</button>
		    		<button type="button" className="sort">
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
				<AllBars bars={filteredBars}/>
			</div>
		)

		
	}
}

export default FilterableBars