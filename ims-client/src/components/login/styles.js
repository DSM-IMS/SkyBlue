import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Section = styled.form`
	display: flex;
	width: 40%;
	height: 400px;
	background: #f2f2f2;
	border: 1px solid gray;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > input:hover {
		cursor: pointer;
	}
`;

export const ArticleInput = styled.input`
	width: 80%;
	height: 50px;
	margin: 4px 0;
	border: 1px solid gray;
	font-size: 14px;
	box-sizing: border-box;

	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

export const ArticleSubmit = styled(ArticleInput)`
	height: 60px;
	background: #bfbfbf;
	font-size: 18px;
	text-align: center;
	line-height: 60px;

	&:hover {
		background: #808080;
		border: 1px solid black;
		font-weight: bold;
	}
`;

export const ArticleWrap = styled(ArticleInput)`
	display: flex;
	line-height: 20px;
	border: none;

	&:hover {
		transform: scale(1);
	}
`;

export const ArticleCheckbox = styled(ArticleInput)`
	display: block;
	width: 20px;
	height: 20px;
	margin: 0 10px 0 0;

	&:hover {
		cursor: pointer;
		transform: scale(1);
	}
`;
