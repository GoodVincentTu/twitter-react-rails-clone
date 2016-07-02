import API from '../API.jsx';

export default {
  getAllTweets() {
  	console.log(1, 'TweetActions');
    API.getAllTweets();
  }
}