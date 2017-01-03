import React from 'react';
import {Link} from 'react-router';

class Account extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const user = this.props.selectedBar.users[0]
		console.log(this.props)
		return (
			<div className="accountOptions">
				
			</div> 
		)
	}
}

export default Account