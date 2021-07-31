import { h } from 'preact';
import style from './style.scss';

const ShowInfoCard = ({ label, value }) => (
	<div class={style.showInfoCard}>
		<div class={style.label}>{label}</div>
		<div class={style.value}>{value}</div>
	</div>
);

export default ShowInfoCard;
