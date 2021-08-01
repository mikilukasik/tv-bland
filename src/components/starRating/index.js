// https://codepen.io/FredGenkin/pen/eaXYGV

import { h } from 'preact';
import style from './style.scss';

const StarRating = ({ rating: { average } = {}, displayNumeric }) => {
	const rating = (average / 2).toFixed(1);
	const ratingRoundedToHalf = Math.round(average) / 2;

	return (
		<div class={style.starRating}>
			<div class={style.stars} style={`--rating: ${ratingRoundedToHalf};`} aria-label={`Rating of this show is ${rating} out of 5.`} />
			{displayNumeric && average && <div class={style.numeric}>{rating} / 5</div>}
		</div>
	);
}

export default StarRating;
