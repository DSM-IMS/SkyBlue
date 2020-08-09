import React from 'react';
import * as S from './styles';

const Modal = (props) => {
	const { modalState, clickedOne, checkedCount } = props;
	const { onModalOnOff, onDeleteOne, onDeleteItems } = props;
	const onModalClick = (event) => {
		event.stopPropagation();
	};

	return (
		<S.Container onClick={onModalOnOff}>
			<S.ModalMain onClick={(event) => onModalClick(event)}>
				{modalState === 'items' ? (
					checkedCount !== 0 ? (
						<S.ModalText>
							선택된 {checkedCount}개의 항목을 삭제하시겠습니까?
						</S.ModalText>
					) : (
						<S.ModalText>선택된 항목이 없습니다.</S.ModalText>
					)
				) : (
					<S.ModalText>선택한 항목을 삭제하시겠습니까?</S.ModalText>
				)}
				{modalState === 'one' ||
				(modalState === 'items' && checkedCount !== 0) ? (
					<S.ModalItemWrap>
						<S.ModalItemButton onClick={onModalOnOff} position="left">
							취소
						</S.ModalItemButton>
						{modalState === 'items' ? (
							<S.ModalItemButton position="right" onClick={onDeleteItems}>
								삭제
							</S.ModalItemButton>
						) : (
							<S.ModalItemButton
								position="right"
								onClick={() => onDeleteOne(clickedOne)}
							>
								삭제
							</S.ModalItemButton>
						)}
					</S.ModalItemWrap>
				) : (
					<S.ModalItemWrap>
						<S.ModalItemButton onClick={onModalOnOff} position="only">
							확인
						</S.ModalItemButton>
					</S.ModalItemWrap>
				)}
			</S.ModalMain>
		</S.Container>
	);
};

export default Modal;
