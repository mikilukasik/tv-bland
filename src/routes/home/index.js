import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>TV Bland</h1>
		<p>
			TV Show and web series database.
			<br />
			Create personalised schedules.
			Episode guide, cast, crew and character information.
		</p>
	</div>
);

export default Home;
