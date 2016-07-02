import ServerActions from "./actions/ServerActions.jsx"

export default {
	getAllTweets() {
		console.log(2, 'API.getAllTweets');
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets))
    .error( error => console.log(error));
	}
}