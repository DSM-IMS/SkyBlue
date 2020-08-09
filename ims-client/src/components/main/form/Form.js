import React, { useState, useEffect } from 'react';
import * as S from './styles';
import FormItem from './formItem/FormItem';
import FormFooter from './footer/FormFooter';
import Modal from './modal/Modal';

const Form = () => {
	const [modalOnOff, setModalOnOff] = useState(false);
	const [modalState, setModalState] = useState('one');
	const [clickedOne, setClickedOne] = useState('');
	const [checkedCount, setCheckedCount] = useState(0);
	const [formItems, setFormItems] = useState([
		{
			id: 1,
			title: '우유 급식 신청서',
			date: '2020.06.1',
			ongoing: false,

			checked: true,
		},
		{
			id: 2,
			title: '우유 급식 신청서',
			date: '2020.06.2',
			ongoing: true,

			checked: true,
		},
		{
			id: 3,
			title: '우유 급식 신청서',
			date: '2020.06.1',
			ongoing: false,

			checked: false,
		},
		{
			id: 4,
			title: '우유 급식 신청서22',
			date: '2020.06.1',
			ongoing: false,

			checked: true,
		},
		{
			id: 5,
			title: '우유 급식 신청서',
			date: '2020.06.2',
			ongoing: false,

			checked: false,
		},
		{
			id: 6,
			title: '아주 긴 이름의 우유 급식 신청서라고 하는 그런 바로 긴 이름들 ',
			date: '2020.06.1',
			ongoing: false,

			checked: false,
		},
		{
			id: 7,
			title: '우유 급식 신청서',
			date: '2020.06.1',
			ongoing: false,

			checked: true,
		},
		{
			id: 8,
			title: '우유 급식 신청서',
			date: '2020.06.2',
			ongoing: true,

			checked: true,
		},
		{
			id: 9,
			title: '우유 급식 신청서',
			date: '2020.06.1',
			ongoing: false,

			checked: false,
		},
		{
			id: 10,
			title: '우유 급식 신청서22',
			date: '2020.06.1',
			ongoing: false,

			checked: true,
		},
		{
			id: 11,
			title: '우유 급식 신청서',
			date: '2020.06.2',
			ongoing: false,

			checked: false,
		},
		{
			id: 12,
			title: '아주 긴 이름의 우유 급식 신청서라고 하는 그런 바로 긴 이름들 ',
			date: '2020.06.1',
			ongoing: false,

			checked: false,
		},
	]);

	useEffect(() => {
		let count = 0;
		formItems.map((formItem) => (formItem.checked ? count++ : ''));
		setCheckedCount(count);
	}, [formItems]);

	useEffect(() => {
		setFormItems(
			formItems.map((formItem) =>
				formItem.ongoing ? { ...formItem, checked: false } : formItem,
			),
		);
	}, []);

	const onModalOnOff = () => {
		setModalOnOff(!modalOnOff);
	};

	const onClickOne = (id) => {
		setClickedOne(id);
		setModalState('one');
		onModalOnOff();
	};

	const onClickItems = () => {
		setModalState('items');
		onModalOnOff();
	};

	const onDeleteOne = (id) => {
		setFormItems(formItems.filter((formItem) => id !== formItem.id));
		onModalOnOff();
	};

	const onDeleteItems = (e) => {
		e.preventDefault();
		setFormItems(formItems.filter((formItem) => !formItem.checked));
		onModalOnOff();
	};

	const onToggle = (id) => {
		setFormItems(
			formItems.map((formItem) =>
				id === formItem.id
					? { ...formItem, checked: !formItem.checked }
					: formItem,
			),
		);
	};

	return (
		<S.Container>
			{modalOnOff && (
				<Modal
					modalState={modalState}
					clickedOne={clickedOne}
					checkedCount={checkedCount}
					onModalOnOff={onModalOnOff}
					onDeleteOne={onDeleteOne}
					onDeleteItems={onDeleteItems}
				/>
			)}
			{formItems.length ? (
				<S.FormWrap>
					{formItems.map((formItem) => (
						<FormItem
							key={formItem.id}
							formItem={formItem}
							onToggle={onToggle}
							onClickOne={onClickOne}
						/>
					))}
				</S.FormWrap>
			) : (
				<S.FormWrapNoItem>"지금은 폼이 없습니다."</S.FormWrapNoItem>
			)}
			<FormFooter onClickItems={onClickItems} />
		</S.Container>
	);
};

export default Form;
