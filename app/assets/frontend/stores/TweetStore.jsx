import AppDispatcher from '../dispatcher.jsx'
import ActionTypes from '../constants.jsx';
// npm event module
import { EventEmitter } from 'events';

let _tweets = [];
const CHANGE_EVENT = "CHANGE"

class TweetEventEmitter extends EventEmitter {
  getAll(){
  	return _tweets.map(tweet => {
			tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
   	});
  }
  emitChange(){
  	this.emit(CHANGE_EVENT);
  }
  addChangeListner(callback){
  	this.on(CHANGE_EVENT, callback);
  }
  removeChangeListner(callback){
  	this.on(CHANGE_EVENT, callback);
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
		default:
		  // no op
	}
});

export default TweetStore;
