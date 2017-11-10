import React from 'react';
import Article from './Article'
import { Grid } from 'semantic-ui-react'

const ESPN = (props) => {

	let news = props.espn.map((info, index) => <Article news={info} key={index}/>)

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

export default ESPN