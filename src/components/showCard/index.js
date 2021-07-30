import { h } from 'preact';
import style from './style.css';

const ShowCard = ({ id, url, name: episodeName, show: { name: showName, image, rating } }) => {
	return (
		<div class={style.showCard}>
			<img src={image.medium} />
			<div class={style.showName}>{showName}</div>
			<div class={style.episodeName}>{episodeName}</div>
		</div>
	);
}

export default ShowCard;
