import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	border-bottom: 1px solid gray;
	background: #f2f2f2;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
`;

export const Section = styled.div`
	width: 40%;
	height: 60px;
	color: white;
	background: #a6a6a6;
	text-align: center;
	font-size: 32px;
	line-height: 60px;
`;

export const ButtonWrap = styled.div`
	position: absolute;
	float: right;
	top: 46px;
	right: 20px;
`;

export const HeaderButton = styled.input`
	font-size: 12px;
	color: black;
	text-decoration: none;
	margin-right: 10px;

	&:hover {
		font-weight: bold;
	}
`;
