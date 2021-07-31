import { h } from 'preact';
import CastCard from '../castCard';
import style from './style.css';

const Cast = ({ show }) => {
	const castMembers = show._embedded?.cast.slice(0, 4) || [];

	return (
		<div class={style.cast}>
			{castMembers.map(CastCard)}
		</div>
	);
};

export default Cast;
