import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	width: 100%;
	height: 50px;
	margin-top: auto;
	border-top: 1px solid gray;
`;

export const FormItem = styled.div`
	display: flex;
	min-width: 160px;
	height: 100%;
	border: none;
	border-right: 1px solid gray;
	color: black;
	background: #d9d9d9;
	justify-content: center;
	align-items: center;

	transition: all 0.3s ease-in-out;

	& > svg {
		width: 2.5em;
		height: 2.5em;
	}
	&:hover {
		cursor: pointer;
	}
	&:hover {
		background: #a0a0a0;
	}
`;

export const FormSearchItem = styled.span`
	display: flex;
	width: 100%;
	height: 100%;
	border: none;
	border-right: 1px solid gray;
	background: #d9d9d9;
	align-items: center;
	justify-content: center;

	transition: all 0.3s ease-in-out;

	&:hover {
		background: #a0a0a0;
	}
`;

export const FormSearchInput = styled.input`
	width: 90%;
	height: 70%;
`;
