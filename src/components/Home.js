import React from 'react';
import { Message } from 'semantic-ui-react'; 

const Home = () => {

	return (
		<div>
			<h1 className="title">News Plan</h1>
			<center><Message floating className="homeP" compact={true}>
				Apple has a mobile News application that lets users subscribe to various news sources to create a personalized set of news. 
				<br />
				For the desktop alike, instead of having to go to different news websites, I thought it would be useful if I had a personalized set of news outlets that I regularly read, 
				<br />
				and to only read their top stories when I do not have a whole ton of time to read the news. 
			</Message></center>
		</div>
	)
}

export default Home