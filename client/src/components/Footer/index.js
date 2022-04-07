import Icon from '../Icon';
import React from 'react';
import { LINKS } from '../../utils/footerLinks.js';

function Footer() {
	return (
		<footer className='footer'>
			<Icon links={LINKS}></Icon>
			<h3> © 2022 Ashley Park, Connie Barrantes, Melany Pietrowsk, Trevor Long</h3>
		</footer>
	);
}

export default Footer;