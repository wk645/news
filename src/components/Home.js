import React from 'react';
import { Message } from 'semantic-ui-react'; 

const Home = () => {

	return (
		<div>
			<h1 className="title">News Plan</h1>
			<center><Message floating className="homeP" compact={true}>
				Similar to Apple's News app, News Plan is a web version which compiles and delivers the users' news preferences, all in this website. You can select from over 50 different sources!
				<br />
				It's a personalized set of news reads that is condensed to the top trending stories, available on the go. 
				<br />

			</Message></center>
		</div>
	)
}

export default Home