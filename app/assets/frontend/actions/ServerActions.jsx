import AppDispatcher from '../dispatcher.jsx';
import ActionTypes from '../constants.jsx';

export default {
  receivedTweets(rawTweets) {
  	console.log(3, 'ServerActions.receivedTweets')
    // AppDispatcher ...
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
    	rawTweets: rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
  	AppDispatcher.dispatch({
  		actionType: ActionTypes.RECEIVED_ONE_TWEET,
  		rawTweet: rawTweet
  	})
  },
  receivedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers: rawUsers
    })
  },
  receivedOneFollower(rawFollower) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower: rawFollower
    })
  }
}