import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class SignUp extends React.Component {

	state = {
		username: "",
		password: ""
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("email")
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value
		})
	}

	authWithFacebook = () => {
		console.log("authorized")
	}

	render() {
		return (
		<div>
		<h1 className='sourceTitle'>
		Login</h1>
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<input type='text' className='loginName' name='username' onChange={this.handleChange} placeholder='username' />
				</Form.Field>
				<Form.Field>
					<input type='password' className='loginPassword' name='password' onChange={this.handleChange} placeholder='password' />
				</Form.Field>
				<Button className='loginButton' type='submit'>Login</Button>
				<Button className="loginButton" onClick={this.authWithFacebook}>Log in with Facebook</Button>
			</Form>
			
		</div>
		)
	}
}