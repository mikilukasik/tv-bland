import { createContext, h } from 'preact';
import { Router } from 'preact-router';
import { useState } from 'preact/hooks';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from './home';
import Show from './show';

export const ScheduleContext = createContext('schedule');

const todaysDate = new Date().toISOString().split('T')[0];

const App = () => {
	const [country, setCountry] = useState('GB');
	const [date, setDate] = useState(todaysDate);

	return (
		<div id="app">
			<ScheduleContext.Provider value={{ country, setCountry, date, setDate }}>
				<Header />
				
				<Router>
					<Show path="/shows/:showId" />
					<Home default />
				</Router>
			</ScheduleContext.Provider>
		</div>
	);
};

export default App;
