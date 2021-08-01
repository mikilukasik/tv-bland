import { h } from 'preact';
import style from './style.scss';

const CastCard = (castMember = {}) => (
	<div class={style.castCard}>
		<div class={style.imageContainer}>
			<span
				class={style.image}
				style={{ background: `url(${castMember.person?.image?.medium || '/assets/avatar.png'})`}}
				role="img"
				aria-label={`photo of ${castMember.person?.name}`}
			/>
		</div>
		<div class={style.name}>{castMember.person?.name}</div>
		<div class={style.character}>{castMember.character?.name}</div>
	</div>
);

export default CastCard;
