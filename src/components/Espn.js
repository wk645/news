import React from 'react';
import Article from './Article'

const ESPN = (props) => {

	let news = props.news.map((info, index) => <Article news={info} key={index}/>)

	return (
		<div>
			{news}
		</div>
	)
}

export default ESPN