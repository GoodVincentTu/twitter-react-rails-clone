import Index from './components/Index.jsx';

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
		ReactDOM.render(<Index />, reactNode);
  }
};

$(documentReady);
