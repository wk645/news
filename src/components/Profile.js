import React from 'react';

export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: props.user
		}
	}

	render() {

		// console.log("profile", this.state.articles)

		return (
			<div>
			<h1 className='sourceTitle'>Profile</h1>

			<div className='savedNewsContainer'>
				<p><u>Saved News</u></p>
			</div>
			</div>
		)
	}

}