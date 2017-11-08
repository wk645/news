import React from 'react';
import CnnArticle from './CnnArticle';
import { Grid } from 'semantic-ui-react'

const CNN = (props) => {

	let news = props.cnn.map((info, index) => <CnnArticle news={info} key={index} />)

	return (
		<center><div>
			<p className="ESPNTitle">CNN</p>
			<Grid columns={2}>
				<Grid.Row>
						{news}
				</Grid.Row>
			</Grid>
		</div></center>
	)
}

export default CNN