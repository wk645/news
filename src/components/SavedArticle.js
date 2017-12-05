import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const SavedArticle = (props) => {

	// console.log("Saved article", props.article)

	const handleClick = () => {
		window.open(`${props.article.url}`)
	}

	return (
		<Grid.Column>
			<Segment color="black">
				<p className="newsTitle" onClick={handleClick}>{props.article.title}</p>
				<p className="description">{props.article.description}</p>
				<center><img src={props.article.urlToImage} alt="" /></center>
			</Segment>
		</Grid.Column>
	)
}

export default SavedArticle