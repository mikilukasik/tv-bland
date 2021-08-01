import { h } from 'preact';
import Description from '../description';
import StarRating from '../starRating';
import Title from '../title';
import style from './style.css';

const ShowHeader = ({ show }) => (
	<div class={style.showHeader}>
		<div class={style.showImageContainer}>
			{show.image?.medium && <img src={show.image?.medium} alt={`image for ${show.name}`} width="210" height="295" />}
		</div>
		<div class={style.showMainInfo}>
			<StarRating rating={show.rating} displayNumeric />
			<Title title={show.name} />
			<Description description={show.summary} />
		</div>
	</div>
);

export default ShowHeader;
