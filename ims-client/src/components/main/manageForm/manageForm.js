import React from 'react';
import * as S from './styles';
import { NavLink } from 'react-router-dom';

const manageForm = () => {
	return (
		<S.Container>
			<S.SelectNav>
				<S.SelectNavItem
					as={NavLink}
					activeStyle={S.SelectNavItemActive}
					to="/main/form/"
				>
					폼 수정
				</S.SelectNavItem>
				<S.SelectNavItem
					as={NavLink}
					activeStyle={S.SelectNavItemActive}
					to="/main/form/result"
				>
					결과 통계 보기
				</S.SelectNavItem>
			</S.SelectNav>
		</S.Container>
	);
};

export default manageForm;
