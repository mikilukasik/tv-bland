import { h } from 'preact';
import style from './style.scss';
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
				<p>
					TV Show and web series database.
					<br />
					Create personalised schedules.
					Episode guide, cast, crew and character information.
				</p>
			</div>
			<div class={style.showsContainer}>
				<h2>Last Added Shows</h2>
				<div class={style.showCardsContainer}>
					{schedule.map(ShowCard)}
				</div>
			</div>
		</div>
	);
};

export default Home;
