import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background: white;
	display: flex;
	flex-direction: column;
`;
