import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 23%;
	height: 250px;
	margin: 6px 1%;
	border: 1px solid gray;
	box-sizing: border-box;
	flex-direction: column;
`;

export const FormItemTitle = styled.p`
	width: calc(100% - 20px);
	padding: 0 10px;
	margin-top: 64px;
	font-weight: bold;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const FormItemDate = styled(FormItemTitle)`
	margin: 16px 0;
`;
