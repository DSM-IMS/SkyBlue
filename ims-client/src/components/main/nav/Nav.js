import React, { useState } from 'react';
import * as S from './styles';
import NavItem from './navItem/NavItem';

const Nav = () => {
	const [navItems, setNavItems] = useState([
		{
			id: 1,
			text: '폼 관리',
			link: '/main/form',
			checked: true,
		},
		{
			id: 2,
			text: '그룹 관리',
			link: '/main/group',
			checked: false,
		},
		{
			id: 3,
			text: '구성원 관리',
			link: '/main/member',
			checked: false,
		},
		{
			id: 4,
			text: '설정',
			link: '/main/setting',
			checked: false,
		},
	]);

	const onNavItemClick = (id) => {
		setNavItems(
			navItems.map((navItem) =>
				navItem.id === id
					? { ...navItem, checked: true }
					: { ...navItem, checked: false },
			),
		);
	};

	return (
		<S.Container>
			<S.NavFirstItem />
			{navItems.map((navItem, index) => (
				<NavItem
					key={navItem.id}
					navItem={navItem}
					onNavItemClick={onNavItemClick}
				/>
			))}
		</S.Container>
	);
};

export default Nav;
