import React from 'react';
import SavedArticles from './SavedArticles';

export default class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: props.user
		}
	}

	render() {

		// console.log("in profile", this.props.articles)

		return (
			<div>
			<h1 className='sourceTitle'>Profile</h1>

			<div className='savedNewsContainer'>
				<p><u>Saved News</u></p>

				<div className="savedNews">
					<SavedArticles articles={this.props.articles} user={this.props.user} />
				</div>
			</div>
			</div>
		)
	}

}