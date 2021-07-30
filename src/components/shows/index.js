import { h } from 'preact';
import style from './style.css';

// Note: `showId` comes from the URL, courtesy of our router
const Shows = ({ showId }) => {
	return (
		<div class={style.profile}>
			<h1>TV Bland</h1>
			{showId}
		</div>
	);
}

export default Shows;
