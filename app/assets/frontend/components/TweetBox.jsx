export default class TweetBox extends React.Component {
	render() {
		return (
        <form>
          <div className="input-field">
            <textarea className="materialize-textarea" />
            <label> What do you want to share?</label>
            <button className="btn right"> Tweet </button>
          </div>
        </form>
		);
	}
}