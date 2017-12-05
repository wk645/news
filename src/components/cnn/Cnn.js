import React from 'react';
import CnnArticle from './CnnArticle';
import { Grid } from 'semantic-ui-react'

export default class CNN extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			cnn: []
		}
	}

	componentDidMount() {
	    fetch('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1')
	    .then(res => res.json())
	    .then(data => this.setState({ cnn: data.articles }))
  	}

  	render() {
	
	let news = this.state.cnn.map((info, index) => <CnnArticle news={info} key={index} saveArticle={this.props.saveArticle} />)
  	
  		return (
			<center><div>
				<p className="sourceTitle">CNN</p>
				<Grid columns={2}>
					<Grid.Row>
							{news}
					</Grid.Row>
				</Grid>
			</div></center>
		)
  	}
}
