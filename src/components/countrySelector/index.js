import { h } from 'preact';
import style from './style.scss';
import { Dropdown, Button, List, Icon, ListItem, ListSection } from 'preact-fluid';
import { useContext } from 'preact/hooks';
import { CountryContext } from '../app';

const COUNTRIES = [
	{ code: 'GB', label: 'United Kingdom' },
	{ code: 'US', label: 'United States' },
];

const CountrySelector = () => {
	const { country, setCountry } = useContext(CountryContext);

	return (
		<div class={style.countrySelector}>
			<select value={country} onChange={(e) => setCountry(e.target.value)}>
				{COUNTRIES.map(country => (<option key={country.code} value={country.code}>{country.label}</option>))}
			</select>
		</div>
	);
};

export default CountrySelector;
