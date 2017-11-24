import Rebase from 're-base';
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyB8xxOKnjexiWQ-MPm2Ff9ZYhMwTCCvzok",
	authDomain: "news-plan.firebaseapp.com",
	databaseURL: "https://news-plan.firebaseio.com",
	projectId: "news-plan",
	storageBucket: "news-plan.appspot.com",
	messagingSenderId: "528903024292"
};


const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { app, base, facebookProvider }