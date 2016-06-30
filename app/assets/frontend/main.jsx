import Greet from './greet.jsx';

class Main extends React.Component {
	render() {
		return (
			
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

