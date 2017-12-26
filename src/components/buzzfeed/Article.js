import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const Article = (props) => {

	// console.log("article", props)

	const handleClick = () => {
		window.open(`${props.news.url}`)
	}

	// const handleSave = (event) => {
	// 	event.preventDefault();
	// 	props.saveArticle(props.news)
	// }

	return (
		<Grid.Column>
			<Segment color='red'>
				<p className='newsTitle' onClick={handleClick}>{props.news.title}</p>
				<p className='description'>{props.news.description}</p>
				<center><img src={props.news.urlToImage} alt='' /></center>
				<br />
			</Segment>
		</Grid.Column>
	)
}

export default Article

// <Button className="saveButton" onClick={handleSave}>Save</Button>