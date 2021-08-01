import { h } from 'preact';
import ShowInfo from '../showInfo';
import Cast from '../cast';
import style from './style.scss';

const ShowDetails = ({ show }) => (
	<div class={style.showDetails}>
		<ShowInfo show={show} />
		<Cast show={show} />
	</div>
);

export default ShowDetails;
