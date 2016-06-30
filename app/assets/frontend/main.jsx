import TweetBox from "./components/TweetBox.jsx"

class Main extends React.Component {
	render() {
		return (
			<div className="containter">
			  <TweetBox />
			</div>
		);
	}
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
