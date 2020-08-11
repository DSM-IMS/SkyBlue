import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background: white;
	flex-direction: column;
`;

export const SelectNav = styled.div`
	display: flex;
	width: 100%;
	height: 60px;
	background: rgba(0, 0, 0, 0);
	align-items: flex-start;
`;

export const SelectNavItem = styled.a`
	width: 140px;
	height: 100%;
	border-right: 1px solid gray;
	background: #f2f2f2;
	color: black;
	font-size: 18px;
	text-align: center;
	line-height: 60px;
	text-decoration: none;

	transition: all 0.3s ease-in-out;

	&:hover {
		width: 160px;
	}
`;

export const SelectNavItemActive = {
	borderBottom: '1px solid #f2f2f2',
	fontWeight: 'bold',
};
