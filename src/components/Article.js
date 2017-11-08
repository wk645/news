import React from 'react';

const Article = (props) => {

	// console.log(props.news)

	const handleClick = () => {
		window.open(`${props.news.url}`)
	}

	return (
		<div>
			<h2 className='newsTitle' onClick={handleClick}>{props.news.title}</h2>
			<p className='description'>{props.news.description}</p>
			<center><img src={props.news.urlToImage} alt='' /></center>
			<br />
		</div>
	)
}

export default Article

// {props.news.url} onClick of title? Image? 