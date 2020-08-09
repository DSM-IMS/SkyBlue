import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	width: 23%;
	height: 250px;
	margin: 6px 1%;
	background: #f0f0f0;
	border: 1px solid gray;
	box-sizing: border-box;
	flex-direction: column;

	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.08);
	}
	&:hover > div {
		display: flex;
	}

	& > svg {
		position: absolute;
		top: 14px;
		right: 20px;
		width: 2em;
		height: 2em;
	}
`;

export const FormItemTitle = styled.p`
	width: calc(100% - 20px);
	padding: 0 10px;
	margin-top: 80px;
	font-weight: bold;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const FormItemDate = styled(FormItemTitle)`
	margin: 16px 0;
`;

export const FormItemHeader = styled.div`
	display: none;
	position: absolute;
	width: 100%;
	height: 60px;
	border-bottom: 1px solid gray;
`;

export const FormItemHeaderItem = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background: #c0c0c0;
	border-right: 1px solid gray;
	align-items: center;
	justify-content: center;

	transition: all 0.3s ease-in-out;

	&:hover {
		width: 120%;
		cursor: pointer;
	}

	& > svg {
		width: 2em;
		height: 2em;
	}
`;

export const FormItemHeaderOngoing = styled(FormItemHeader)`
	display: flex;
	height: 40px;
	background: #c0c0c0;
	justify-content: center;
	text-align: center;
	line-height: 40px;
	font-size: 18px;
	font-weight: bold;
`;
