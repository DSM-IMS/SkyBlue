import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
	const { id, text, link, checked } = props.navItem;

	return (
		<S.Container as={Link} to={link} checked={checked}>
			{text}
		</S.Container>
	);
};

export default NavItem;
