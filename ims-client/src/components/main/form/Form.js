import React, { useState } from 'react';
import * as S from './styles';
import FormItem from './formItem/FormItem';
import FormFooter from './footer/FormFooter';

const Form = () => {
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

	return (
		<S.Container>
			{formItems.length ? (
				<S.FormWrap>
					{formItems.map((formItem) => (
						<FormItem key={formItem.id} formItem={formItem} />
					))}
				</S.FormWrap>
			) : (
				<S.FormWrapNoItem>"지금은 폼이 없습니다."</S.FormWrapNoItem>
			)}
			<FormFooter />
		</S.Container>
	);
};

export default Form;
