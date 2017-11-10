import React from 'react';

const CustomArticle = (props) => {

	const handleClick = () => {
		window.open(`${props.news.url}`)
	}

	return (
		<div>
			<p onClick={handleClick}>{props.news.title}</p>
			<p>{props.news.description}</p>
			<p>{props.news.urlToImage}</p>
		</div>
	)
}

export default CustomArticle