import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import CustomArticle from './CustomArticle' 
import { Grid } from 'semantic-ui-react';
import newsOptions from './newsOptions';

export default class Custom extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			custom: [],
			articleName: null
		}
	}

	fetchCustom(data) {
	    fetch(`https://newsapi.org/v2/top-headlines?sources=${data}&apiKey=6c3c0586700d42f186c867bfd45f05e1`)
	    .then(res => res.json())
	    .then(data => this.setState({ custom: data.articles }))
	}

	handleSelect = (event, data) => {
		this.fetchCustom(data.value)
	}

	// getName = (name) => {
	// 	this.setState({
	// 		articleName: name
	// 	})
	// }

	render() {


	let news = this.state.custom.map((info, index) => <CustomArticle key={index} news={info} name={info.source.name} cb={this.getName} />)

	// console.log("source name", this.state.name)

	// let sourceName = this.state.custom ? this.state.custom.source.name : null

		return (
		<div>
			<center>
			<p className="customTitle">CUSTOM</p>
			<Dropdown placeholder='Select a Source' search selection options={newsOptions} onChange={this.handleSelect} scrolling={true} />

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