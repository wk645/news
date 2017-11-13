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
		{ key: 'daily-mail', value: 'daily-mail', text: 'Daily Mail'},
		{ key: 'google-news', value: 'google-news', text: 'Google News'},
		{ key: 'hacker-news', value: 'hacker-news', text: 'HackerNews'},
		{ key: 'national-geographic', value: 'national-geographic', text: 'National Geographic'},
		{ key: 'new-york-magazine', value: 'new-york-magazine', text: 'New York Magazine'},
		{ key: 'reddit-r-all', value: 'reddit-r-all', text: 'Reddit'},
		{ key: 'time', value: 'time', text: 'Time'},
		{ key: 'usa-today', value: 'usa-today', text: 'USA Today'}
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