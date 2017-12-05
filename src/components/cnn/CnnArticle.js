import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';

const CnnArticle = (props) => {

	const handleClick = () => {
		window.open(`${props.news.url}`)
	}

	const handleSave = (event) => {
		console.log("pass cb f(x) here")
	}

	return (
		<Grid.Column>
			<Segment color="red">
			<p className='newsTitle' onClick={handleClick}>{props.news.title}</p>
			<p className='description'>{props.news.description}</p>
			<center><img src={props.news.urlToImage} alt='' /></center>
			<br />
			<Button className="articleButton" onClick={handleSave}>Save</Button>
			</Segment>
		</Grid.Column>
	)
}

export default CnnArticle