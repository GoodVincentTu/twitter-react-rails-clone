import React from 'react';
import TweetActions from '../actions/TweetActions.jsx';

export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    // this.props.sendTweet(this.refs.tweetTextArea.value);
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }
	render() {
		return (
			<div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea" />
            <label> What do you want to share?</label>
            <button type="submit" className="btn right"> Tweet </button>
          </div>
        </form>
      </div>
		);
	}
}