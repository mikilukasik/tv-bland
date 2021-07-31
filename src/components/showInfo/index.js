import { h } from 'preact';
import ShowInfoCard from '../showInfoCard';
import style from './style.css';

const getDays = ({ schedule: { days = [] } = {} }) => {
	// days is an array of day names, this function converts it to a friendly string

	switch (days.length) {
		case 0: return '';
		case 1: return `${days[0]}s`;
		case 7: return 'Daily';
		default:		
	}

	const daysCopy = days.slice();
	const lastDay = daysCopy.pop();
	const joined = `${daysCopy.join('s, ')}s and ${lastDay}s`;

	switch (joined) {
		case 'Saturdays and Sundays': return 'Weekends';
		case 'Mondays, Tuesdays, Wednesdays, Thursdays and Fridays': return 'Weekdays';
		default: return joined;
	}
};

const getSchedule = (show) => {
	const { schedule: { time } = {} } = show;
	const days = getDays(show);
	return `${
		days
	}${
		days ? ' ' : ''
	}${
		time ? 'at ' : ''
	}${
		time
	}`;
};

const getGenres = (show) => show.genres?.join(', ');

const ShowInfo = ({ show }) => {
	const schedule = getSchedule(show);
	const genres = getGenres(show);

	return (
		<div class={style.showInfo}>
			<ShowInfoCard label="Streamed on" value={show.network?.name} />
			{schedule && <ShowInfoCard label="Schedule" value={schedule} />}
			<ShowInfoCard label="Status" value={show.status} />
			{genres && <ShowInfoCard label="Genres" value={genres} />}
		</div>
	);
};

export default ShowInfo;