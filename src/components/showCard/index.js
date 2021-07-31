import { h } from 'preact';
import StarRating from '../starRating';
import style from './style.scss';

const ShowCard = ({ id: episodeId, url, name: episodeName, show: { id: showId, name: showName, image, rating } }) => {
	const showUrl = `/shows/${showId}`;
	const episodeUrl = `/shows/${showId}/episodes/${episodeId}`;
	const imageSrc = image && image.medium;

	return (
		<div class={style.showCard}>
			<a href={showUrl}>
				<div class={style.showImageContainer} >
					{imageSrc && <img src={imageSrc} />}
				</div>
				<StarRating rating={rating} />
				<div class={style.showName}>{showName}</div>
				<a href={episodeUrl}><div class={style.episodeName}>{episodeName}</div></a>
			</a>
		</div>
	);
}

export default ShowCard;
