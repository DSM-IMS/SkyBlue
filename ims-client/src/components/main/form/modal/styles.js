import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	justify-content: center;
	align-items: center;
	z-index: 2;
`;

export const ModalMain = styled.div`
	display: flex;
	width: 600px;
	height: 400px;
	border: 1px solid gray;
	border-radius: 20px;
	background: white;
	box-sizing: border-box;
	flex-direction: column;
`;

export const ModalText = styled.p`
	width: 100%;
	height: 200px;
	text-align: center;
	line-height: 200px;
	font-size: 24px;
	font-weight: bold;
`;

export const ModalItemWrap = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	margin-top: auto;
`;

export const ModalItemButton = styled.button`
	width: 100%;
	height: 100%;
	border-top: 1px solid gray;
	border-right: 1px solid gray;
	font-size: 32px;
	font-weight: bold;
	border-radius: ${(props) =>
		props.position === 'right'
			? '0 0 20px 0'
			: props.position === 'left'
			? '0 0 0 20px'
			: '0 0 20px 20px'};

	transition: 0.3s all ease-in-out;

	&:hover {
		width: 120%;
	}
`;
