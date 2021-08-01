import { createContext, h } from 'preact';
import { Router } from 'preact-router';
import { useState } from 'preact/hooks';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from './home';
import Show from './show';

export const CountryContext = createContext('country');

const App = () => {
	const [country, setCountry] = useState('GB')

	return (
		<div id="app">
			<CountryContext.Provider value={{ country, setCountry }}>
				<Header />
				
				<Router>
					<Show path="/shows/:showId" />
					<Home default />
				</Router>
			</CountryContext.Provider>
		</div>
	);
};

export default App;
