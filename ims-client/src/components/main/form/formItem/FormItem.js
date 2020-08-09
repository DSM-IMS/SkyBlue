import React from 'react';
import * as S from './styles';

const FormItem = (props) => {
	const { id, title, date, ongoing, checked } = props.formItem;

	return (
		<S.Container>
			<S.FormItemTitle>{title}</S.FormItemTitle>
			<S.FormItemDate>{date}</S.FormItemDate>
		</S.Container>
	);
};

export default FormItem;
