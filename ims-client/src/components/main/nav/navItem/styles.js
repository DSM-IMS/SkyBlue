import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 60px;
	background: ${(props) => (props.checked ? '#a6a6a6' : '#d9d9d9')};
	border-bottom: 1px solid gray;
	font-size: 18px;
	font-weight: ${(props) => (props.checked ? 'bold' : 300)};
	line-height: 60px;
	text-align: center;
	text-decoration: none;
	color: black;

	transition: all 0.3s ease-in-out;

	&:hover {
		height: 70px;
		line-height: 70px;
		font-size: 20px;
	}
`;
