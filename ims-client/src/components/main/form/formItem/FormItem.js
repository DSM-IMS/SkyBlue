import React from 'react';
import * as S from './styles';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

const FormItem = (props) => {
	const { id, title, date, ongoing, checked } = props.formItem;

	return (
		<S.Container>
			{checked && !ongoing && <MdCheckBox />}
			{ongoing ? (
				<S.FormItemHeaderOngoing>진행중</S.FormItemHeaderOngoing>
			) : (
				<S.FormItemHeader>
					<S.FormItemHeaderItem>
						<FaPen />
					</S.FormItemHeaderItem>
					<S.FormItemHeaderItem>
						<BsFillTrashFill />
					</S.FormItemHeaderItem>
					<S.FormItemHeaderItem>
						{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
					</S.FormItemHeaderItem>
				</S.FormItemHeader>
			)}
			<S.FormItemTitle>{title}</S.FormItemTitle>
			<S.FormItemDate>{date}</S.FormItemDate>
		</S.Container>
	);
};

export default FormItem;
