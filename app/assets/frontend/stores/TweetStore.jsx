import AppDispatcher from '../dispatcher.jsx'
import ActionTypes from '../constants.jsx';
import AppEventEmitter from './AppEventEmitter.jsx'

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
  getAll(){
  	return _tweets.map(tweet => {
			tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
   	});
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
	// action.actionType == 'RECEIVED_TWEETS'
	switch(action.actionType){
		case ActionTypes.RECEIVED_TWEETS:
		  console.log(4, 'TweetStore');
		  // acknowledge tweets
		  _tweets = action.rawTweets;
		  // emit a change event
		  TweetStore.emitChange();
		  break;
		case ActionTypes.RECEIVED_ONE_TWEET:
		  _tweets.unshift(action.rawTweet);
		  TweetStore.emitChange();
		  break;
		default:
		  // no op
	}
});

export default TweetStore;
