import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const CnnArticle = (props) => {

	console.log(props.news.urlToImage)

	const handleClick = () => {
		window.open(`${props.news.url}`)
	}

	return (
		<Grid.Column>
			<Segment color="red">
			<p className='newsTitle' onClick={handleClick}>{props.news.title}</p>
			<p className='description'>{props.news.description}</p>
			<center><img src={props.news.urlToImage} alt='' /></center>
			<br />
			</Segment>
		</Grid.Column>
	)
}

export default CnnArticle