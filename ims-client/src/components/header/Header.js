import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<S.Container>
			<S.Section>IMS</S.Section>
			<S.ButtonWrap>
				<S.HeaderButton as={Link} to="/">
					개발자 소개
				</S.HeaderButton>
				<S.HeaderButton as={Link} to="/">
					로그아웃
				</S.HeaderButton>
			</S.ButtonWrap>
		</S.Container>
	);
};

export default Header;
