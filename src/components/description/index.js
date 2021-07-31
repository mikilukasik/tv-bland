/* eslint-disable react/no-danger */

import { h } from 'preact';
import style from './style.scss';

const Description = ({ description }) => (
	<div class={style.description} dangerouslySetInnerHTML={{ __html: description }} /> 
);

export default Description;
