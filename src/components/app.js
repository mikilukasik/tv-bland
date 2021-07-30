import { h } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from './home';
import Shows from './shows';

const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<Shows path="/shows/" />
			<Shows path="/shows/:showId" />
		</Router>
	</div>
)

export default App;
