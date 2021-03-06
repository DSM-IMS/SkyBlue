import React from 'react';
import * as S from './styles';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FormFooter = (props) => {
	const { onClickItems } = props;

	return (
		<S.Container>
			<S.FormItem as={Link} to="/main/form/create">
				<IoMdAddCircle />
			</S.FormItem>
			<S.FormItem onClick={onClickItems}>
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
