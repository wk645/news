import React from 'react';
import Article from './Article'
import { Grid } from 'semantic-ui-react'

export default class ESPN extends React.Component {
	constructor() {
		super()

		this.state = {
			espn: []
		}
	}

	componentDidMount() {
	    fetch('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1')
	    .then(res => res.json())
	    .then(data => this.setState({ espn: data.articles }))
	}

	render() {
	
	let news = this.state.espn.map((info, index) => <Article news={info} key={index}/>)
	
		return (
			<center><div>
				<p className="sourceTitle">ESPN</p>
				<Grid columns={2}>
					<Grid.Row>
							{news}
					</Grid.Row>
				</Grid>
			</div></center>
		)
	}
}

