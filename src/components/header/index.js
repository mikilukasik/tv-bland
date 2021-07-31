import { h } from 'preact';
import style from './style.scss';

const Header = () => (
	<div class={style.header}>
		<a href="/">
			<h1>TV Bland</h1>
		</a>
	</div>
);

export default Header;
