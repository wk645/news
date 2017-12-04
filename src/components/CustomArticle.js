import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'; 

const CustomArticle = (props) => {

	// console.log("in custom article", props)

	const handleClick = () => {
		window.open(`${props.news.url}`)
	}

	// const handleCallBackFunction = (event) => {
	// 	this.props.cb(props.name)
	// }

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