import React from 'react';
import Article from './Article'
import { Grid } from 'semantic-ui-react'

const ESPN = (props) => {

	let news = props.news.map((info, index) => <Article news={info} key={index}/>)

	return (
	<center><div>
		<p className="ESPNTitle">ESPN</p>
		<Grid columns={2}>
			<Grid.Row>
					{news}
			</Grid.Row>
		</Grid>
	</div></center>
	)
}

export default ESPN