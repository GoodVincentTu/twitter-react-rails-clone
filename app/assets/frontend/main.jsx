import TweetBox from "./components/TweetBox.jsx"
import TweetsList from "./components/TweetsList.jsx"

// the view part of the flux flow (testing)
import TweetStore from './stores/TweetStore.jsx';
import TweetActions from './actions/TweetActions.jsx';
TweetActions.getAllTweets();

let getAppState = () => {
	return { tweetsList: TweetStore.getAll() };
}

// Mock data
// let mockTweets = [
//   { id: 1, name: 'Samuel', body: '#First Tweet'},
//   { id: 2, name: 'Samuel', body: '#First Tweet'},
//   { id: 3, name: 'Samuel', body: '#First Tweet'}
// ];


class Main extends React.Component {
	constructor(props){
		super(props);
		// this.state = { tweetsList: mockTweets }
	  // this.state = { tweetsList: []}
	  this.state = getAppState();

	  // extract bind 'this' _onChange code here
	  this._onChange = this._onChange.bind(this);
	}
	// formattedTweets(tweetsList) {
	// 	let formattedList = tweetsList.map(tweet => {
	// 		tweet.formattedDate = moment(tweet.created_at).fromNow();
 //      return tweet;
	// 	});
	// 	return {
 //      tweetsList: formattedList
	// 	};
	// }
	addTweet(tweetToAdd) {
	// 	$.post("/tweets", {body: tweetToAdd })
	// 	.success( savedTweet => {
	//     let newTweetsList = this.state.tweetsList;
	// 		newTweetsList.unshift(savedTweet);
	// 		this.setState(this.formattedTweets(newTweetsList));
	// 	})
	// 	.error(error => console.log(error));
	}
  componentDidMount() {
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formattedTweets(data)))
    // .error(error => console.log(error));

    // listen to the change
    TweetStore.addChangeListner(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListner(this._onChange);
  }
  _onChange(){
  	console.log(5, "Main._onChange")
  	this.setState(getAppState());
  }
	render() {
		return (
			<div className="containter">
			  // <TweetBox sendTweet={this.addTweet.bind(this)}/>
			  <TweetBox />
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
