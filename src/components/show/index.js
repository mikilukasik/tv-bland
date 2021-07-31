import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { getShow } from '../../controllers/apiController';
import ShowDetails from '../showDetails';
import ShowHeader from '../showHeader';
import style from './style.css';

// Note: `showId` comes from the URL, courtesy of our router
const Show = ({ showId }) => {
	const [show, setShow] = useState();

	useEffect(() => {
		getShow({ showId }).then(setShow);
		document.title = `${show?.name} - TV Bland`;
	}, [showId, show?.name]);

	if (!show) return null;

	return (
		<div class={style.showContainer}>
			<ShowHeader show={show} />
			<ShowDetails show={show} />
		</div>
	);
}

export default Show;
