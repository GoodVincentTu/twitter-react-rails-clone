import TweetBox from "./components/TweetBox.jsx"
import TweetsList from "./components/TweetsList.jsx"

// let mockTweets = [
//   { id: 1, name: 'Samuel', body: '#First Tweet'},
//   { id: 2, name: 'Samuel', body: '#First Tweet'},
//   { id: 3, name: 'Samuel', body: '#First Tweet'}
// ];


class Main extends React.Component {
	constructor(props){
		super(props);
		// this.state = { tweetsList: mockTweets }
	  this.state = { tweetsList: []}
	}
	addTweet(tweetToAdd) {
		//  mockTweets.unshift({...})
		let newTweetsList = this.state.tweetsList;
		newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

		this.setState({ tweetsList: newTweetsList});
	}
	render() {
		return (
			<div className="containter">
			  <TweetBox sendTweet={this.addTweet.bind(this)}/>
			  <TweetsList tweets={this.state.tweetsList}/>
			</div>
		);
	}
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
		ReactDOM.render(<Main />, reactNode);
  }
};

$(documentReady);
