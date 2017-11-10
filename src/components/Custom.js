import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import CustomArticle from './CustomArticle' 

const Custom = (props) => {

	console.log("in Custom", props)

	const newsOptions = [
		{ key: 'bbc', value: 'bbc-news', text: 'BBC'},
		{ key: 'bloomberg', value: 'bloomberg', text: 'Bloomberg'},
		{ key: 'cnbc', value: 'cnbc', text: 'CNBC'},
		{ key: 'hackerNews', value: 'hacker-news', text: 'HackerNews'}
	]

	const handleSelect = (event, data) => {
		// console.log("value", data.value)
		props.fetch(data.value)
	}

	let news = props.custom.map((info, index) => <CustomArticle key={index} news={info} />)

	return (
		<div>
			<center><Dropdown placeholder='Select a Source' search selection options={newsOptions} onChange={handleSelect} /></center>
			{news}
		</div>
	)
}

export default Custom