import React from 'react';
import SavedArticle from './SavedArticle';
import { Grid } from 'semantic-ui-react';

export default class SavedArticles extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: props.user
		}
	}

	render() {

		// console.log("in saved container", this.props.articles)

		let article = this.props.articles.map((article, index) => <SavedArticle key={index} article={article.articleContent} user={this.props.user}/>)

		return (
			<center><div>
				<Grid columns={2}>
					<Grid.Row>
						{article}
					</Grid.Row>
				</Grid>
			</div></center>
		)
	}
}