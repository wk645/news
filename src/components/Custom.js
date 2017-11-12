import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import CustomArticle from './CustomArticle' 
import { Grid } from 'semantic-ui-react';

export default class Custom extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			custom: []
		}
	}

	fetchCustom(data) {
	    fetch(`https://newsapi.org/v1/articles?source=${data}&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1`)
	    .then(res => res.json())
	    .then(data => this.setState({ custom: data.articles }))
	}

	newsOptions = [
		{ key: 'bbc', value: 'bbc-news', text: 'BBC'},
		{ key: 'bloomberg', value: 'bloomberg', text: 'Bloomberg'},
		{ key: 'cnbc', value: 'cnbc', text: 'CNBC'},
		{ key: 'google-news', value: 'google-news', text: 'Google News'},
		{ key: 'hackerNews', value: 'hacker-news', text: 'HackerNews'},
		{ key: 'time', value: 'time', text: 'Time'}
	]

	handleSelect = (event, data) => {
		// console.log("value", data.value)
		this.fetchCustom(data.value)
	}

	render() {

	let news = this.state.custom.map((info, index) => <CustomArticle key={index} news={info} />)

		return (
		<div>
			<center>
			<p className="customTitle">CUSTOM</p>
			<Dropdown placeholder='Select a Source' search selection options={this.newsOptions} onChange={this.handleSelect} scrolling={true} />
				<Grid columns={2}>
					<Grid.Row>
						{news}
					</Grid.Row>
				</Grid>
			</center>
		</div>
		)
	}
}