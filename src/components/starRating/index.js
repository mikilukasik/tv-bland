// https://codepen.io/FredGenkin/pen/eaXYGV

import { h } from 'preact';
import style from './style.scss';

const StarRating = ({ rating }) => {
	return (
		<div class={style.starRating}>
			<div class={style.Stars} style={`--rating: ${rating};`} aria-label={`Rating of this product is ${rating} out of 5.`} />
		</div>
	);
}

export default StarRating;
