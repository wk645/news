import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { app } from '../base';

export default class Logout extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			redirect: false
		}
	}

	componentWillMount() {
		app.auth().signOut().then((user) => {
			this.setState({ redirect: true })
		})
	}

	render() {

		if (this.state.redirect === true) {
				return <Redirect to='/' />
			}

		return (
	        <Segment>
	          <Dimmer active>
	            <Loader>Logging Out</Loader>
	          </Dimmer>
	        </Segment>
		)
	}
}