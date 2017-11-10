import React from 'react';
import Article from './Article';
import { Grid } from 'semantic-ui-react'

const Buzzfeed = (props) => {

	let news = props.buzzfeed.map((info, index) => <Article key={index} news={info} /> )

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

export default Buzzfeed