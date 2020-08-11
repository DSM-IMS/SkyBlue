import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background: white;
	flex-direction: column;
`;

export const RoutingConatiner = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background: #f2f2f2;
`;

export const SelectNav = styled.div`
	display: flex;
	width: 100%;
	height: 60px;
	background: rgba(0, 0, 0, 0);
	align-items: flex-start;
`;

export const NonSelectNavItem = styled.div`
	width: 100%;
	height: 100%;
	border-bottom: 1px solid gray;
	box-sizing: border-box;
`;

export const SelectNavItem = styled.a`
	min-width: 180px;
	height: 100%;
	border-right: 1px solid gray;
	border-bottom: 1px solid gray;
	box-sizing: border-box;
	background: #f2f2f2;
	color: black;
	font-size: 18px;
	text-align: center;
	line-height: 60px;
	text-decoration: none;

	transition: all 0.3s ease-in-out;

	&:hover {
		min-width: 220px;
	}
`;

export const SelectNavItemActive = {
	borderBottom: 'none',
	fontWeight: 'bold',
};
