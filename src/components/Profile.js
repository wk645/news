import React from 'react';

export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: props.user
		}
	}

	render() {

		// console.log(this.state.user)

		return (
			<div>
			<h1 className='sourceTitle'>Profile</h1>
			</div>
		)
	}

}