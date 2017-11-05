import React from 'react';

const Article = (props) => {

	console.log(props.news)

	return (
		<div>
			<h2 className='newsTitle'>{props.news.title}</h2>
			<p className='description'>{props.news.description}</p>
			<center><img src={props.news.urlToImage} alt='' /></center>
		</div>
	)
}

export default Article

// {props.news.url} onClick of title? Image? 