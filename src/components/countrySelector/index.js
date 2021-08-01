import { h } from 'preact';
import style from './style.scss';
import { useContext } from 'preact/hooks';
import { ScheduleContext } from '../app';

const COUNTRIES = [
	{ code: 'GB', label: 'United Kingdom' },
	{ code: 'US', label: 'United States' },
];

const CountrySelector = () => {
	const { country, setCountry, date, setDate } = useContext(ScheduleContext);

	return (
		<div class={style.filterGroup}>
			<div class={style.countrySelector}>
				<select value={country} onChange={(e) => setCountry(e.target.value)}>
					{COUNTRIES.map(country => (<option key={country.code} value={country.code}>{country.label}</option>))}
				</select>
			</div>

			<div class={style.dateSelector}>
				<input type="date" value={date} onChange={e => setDate(e.target.value)} />
			</div>
		</div>
	);
};

export default CountrySelector;
