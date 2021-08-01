import { h } from 'preact';
import CastCard from '../castCard';
import style from './style.css';

const Cast = ({ show }) => {
	const castMembers = show._embedded?.cast.slice(0, 4) || [];

	if (!castMembers.length) return null;

	return (
		<div class={style.cast}>
			<div class={style.castHeader}>Starring</div>
			{castMembers.map(CastCard)}
		</div>
	);
};

export default Cast;
