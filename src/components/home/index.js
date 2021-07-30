import { h } from 'preact';
import style from './style.css';
import { useEffect, useState } from 'preact/hooks';
import { getSchedule } from '../../controllers/apiController';
import ShowCard from '../showCard';

const Home = () => {
	const [schedule, setSchedule] = useState([]);

	useEffect(() => {
		getSchedule().then(setSchedule);
	}, []);

	return (
		<div class={style.home}>
			<div>
				<h1>TV Bland</h1>
				<p>
					TV Show and web series database.
					<br />
					Create personalised schedules.
					Episode guide, cast, crew and character information.
				</p>
			</div>
			<div>
				<h2>Last Added Shows</h2>
				<div class={style.showsContainer}>
					{schedule.map(ShowCard)}
				</div>
			</div>
		</div>
	);
};
export default Home;
