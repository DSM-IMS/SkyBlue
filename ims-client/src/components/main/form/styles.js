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

export const FormItem = styled.div`
	width: 24%;
	height: 300px;
	flex: 0 1 auto;
	border: 1px solid gray;
`;
