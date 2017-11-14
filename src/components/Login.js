import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class SignUp extends React.Component {

	state = {
		username: "",
		password: ""
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.loginUser(this.state);

	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<input type='text' className='loginName' name='username' onChange={this.handleChange} placeholder='username' />
				</Form.Field>
				<Form.Field>
					<input type='text' className='loginPassword' name='password' onChange={this.handleChange} placeholder='password' />
				</Form.Field>
				<Button className='loginButton' type='submit'>Login</Button>
			</Form>
		)
	}
}