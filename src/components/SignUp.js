import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class SignUp extends React.Component {

	state = {
		fullname: "",
		email: "",
		username: "",
		password: ""
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.signUpUser(this.state);
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
		<div>
		<h1 className='sourceTitle'>Sign Up</h1>

			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<input type='text' name='fullname' onChange={this.handleChange} placeholder='full name' />
				</Form.Field>
				<Form.Field>
					<input type='text' name='email' onChange={this.handleChange} placeholder='email' />
				</Form.Field>
				<Form.Field>
					<input type='text' name='username' onChange={this.handleChange} placeholder='username' />
				</Form.Field>
				<Form.Field>
					<input type='password' name='password' onChange={this.handleChange} placeholder='password' />
				</Form.Field>
				<Button className='signUp' type='submit'>Sign Up</Button>
			</Form>
		</div>

		)
	}
}