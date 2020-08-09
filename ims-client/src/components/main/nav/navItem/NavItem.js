import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
	const { id, text, link, checked } = props.navItem;
	const { onNavItemClick } = props;

	return (
		<S.Container
			as={Link}
			to={link}
			checked={checked}
			onClick={() => onNavItemClick(id)}
		>
			{text}
		</S.Container>
	);
};

export default NavItem;
