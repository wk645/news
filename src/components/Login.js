import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
// import { Toaster, Intent } from '@blueprintjs/core';
import { app, facebookProvider } from '../base';

export default class SignUp extends React.Component {

	state = {
		username: "",
		password: "",
		redirect: false
	}

	handleSubmit = (event) => {
		event.preventDefault();
		// console.log("email")
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value
		})
	}

	authWithFacebook = () => {
		app.auth().signInWithPopup(facebookProvider)
		.then((result, error) => {
			if (error) {
				alert("Unable to login with FB!")
			} else {
				this.setState({ redirect: true })
			}
		})
	}

	render() {

		if (this.state.redirect === true) {
			return <Redirect to='/' />
		}

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