import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background: #f2f2f2;
	flex-direction: column;
`;

export const FormWrap = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-wrap: wrap;
	overflow: auto;
`;

export const FormWrapNoItem = styled.p`
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 100%;
	font-size: 24px;
	font-weight: bold;
`;
