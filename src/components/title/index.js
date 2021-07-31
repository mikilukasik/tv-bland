import { h } from 'preact';
import style from './style.scss';

const Title = ({ title }) => (
	<div class={style.title}>
		{title}
	</div>
);

export default Title;
