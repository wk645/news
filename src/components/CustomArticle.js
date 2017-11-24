import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'; 

const CustomArticle = (props) => {

	const handleClick = () => {
		window.open(`${props.news.url}`)
	}

	return (
		<Grid.Column>
			<Segment color='black'>
			<p className='newsTitle' onClick={handleClick}>{props.news.title}</p>
						<p className='description'>{props.news.description}</p>
						<img src={props.news.urlToImage} alt='' />
						<br />
			</Segment>
		</Grid.Column>
	)
}

export default CustomArticle