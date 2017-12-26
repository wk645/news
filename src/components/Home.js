import React from 'react';
import { Message } from 'semantic-ui-react'; 

const Home = () => {

	return (
		<div>
			<h1 className="title">News Plan</h1>
			<center><Message floating className="homeP" compact={true}>
				Similar to Apple's News app, News Plan is a web version which compiles and delivers our users' news preferences, all on this website. You can select from over 30 different sources! 
				<br />
				It is a personalized set of news articles that is condensed to the current top trending stories, available on the go. 
				<br />
				<br />
				If you do not see a source that you would like to add, please send an e-mail to wk645@nyu.edu. 
				<br />

			</Message></center>
		</div>
	)
}

export default Home