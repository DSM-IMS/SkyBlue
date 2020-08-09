import React from 'react';
import * as S from './styles';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';

const FormFooter = (props) => {
	const { onDeleteItems } = props;

	return (
		<S.Container>
			<S.FormItem>
				<IoMdAddCircle />
			</S.FormItem>
			<S.FormItem onClick={onDeleteItems}>
				<BsFillTrashFill />
			</S.FormItem>
			<S.FormSearchItem>
				<S.FormSearchInput placeholder="검색어를 입력해주세요." />
			</S.FormSearchItem>
			<S.FormItem>
				<FaSearch />
			</S.FormItem>
		</S.Container>
	);
};

export default FormFooter;
