import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { app, facebookProvider } from '../base';

export default class SignUp extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			redirect: false,
		}
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
		.then((user, error) => {
			if (error) {
				console.log("Unable to login with FB!")
			} else {
				this.props.setCurrentUser(user)
				this.setState({ redirect: true })
			}
		})
	}

	authWithEmailPassword = (event) => {
		event.preventDefault();

		let email = document.getElementById('emailInput').value
		let password = document.getElementById('passwordInput').value

		app.auth().fetchProvidersForEmail(email)
		.then((providers) => {
			if (providers.length === 0) {
				// create user
				return app.auth().createUserWithEmailAndPassword(email, password)

			} else if (providers.indexOf("password") === -1) {
				// they used facebook
				alert("Try a different method to log in")
			} else {
				// sign in the user
				console.log("success")
				return app.auth().signInWithEmailAndPassword(email, password)

			}
		})
		.then((user) => {
			if (user && user.email) {
				this.props.setCurrentUser(user)
				this.setState({ redirect: true })
			}
		})
		.catch((error) => {
			console.log(error.message)
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
					<input type='text' id='emailInput' className='loginName' name='email' onChange={this.handleChange} placeholder='email' />
				</Form.Field>
				<Form.Field>
					<input type='password' id='passwordInput' className='loginPassword' name='password' onChange={this.handleChange} placeholder='password' />
				</Form.Field>
				<Button className='loginButton' type='submit' onClick={this.authWithEmailPassword}>Login</Button>
				<Button className="loginButton" onClick={this.authWithFacebook}>Log in with Facebook</Button>
			</Form>
			
		</div>
		)
	}
}