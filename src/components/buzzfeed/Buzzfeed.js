import React from 'react';
import Article from './Article';
import { Grid } from 'semantic-ui-react'

export default class Buzzfeed extends React.Component {

	constructor() {
		super()
		this.state = {
			buzzfeed: []
		}
	}


	componentDidMount() {
	    fetch('https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1')
	    .then(res => res.json())
	    .then(data => this.setState({ buzzfeed: data.articles }))
	}

	render() {

	// console.log("in BF", this.props.saveArticle)

	let news = this.state.buzzfeed.map((info, index) => <Article key={index} news={info} saveArticle={this.props.saveArticle} /> )
		
		return (
		<center><div>
			<p className="sourceTitle">Buzzfeed</p>
			<Grid columns={2}>
				<Grid.Row>
					{news}
				</Grid.Row>
			</Grid>
		</div></center>
		)
	}

}