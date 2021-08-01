import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

const Header = () => (
	<div class={style.header}>
		<div>
			<Link activeClassName={style.active} href="/">
				<h1>TV Bland</h1>
			</Link>
		</div>
	</div>
);

export default Header;
