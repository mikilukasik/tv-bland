import { h } from 'preact';
import { Router } from 'preact-router';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from './home';
import Show from './show';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Show path="/shows/:showId" />
			<Home default />
		</Router>
	</div>
)

export default App;
