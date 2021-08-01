import { h } from 'preact';
import CountrySelector from '../countrySelector';
import style from './style.scss';

const Header = () => (
	<div class={style.header}>
		<div>
			<a href="/">
				<h1>TV Bland</h1>
			</a>
		</div>

		<CountrySelector />
	</div>
);

export default Header;
