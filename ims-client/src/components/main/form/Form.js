import React, { useState } from 'react';
import * as S from './styles';

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
			title: '우유 급식 신청서',
			date: '2020.06.2',
			ongoing: true,

			checked: true,
		},
		{
			id: 5,
			title: '우유 급식 신청서',
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
						<S.FormItem />
					))}
				</S.FormWrap>
			) : (
				<p>"지금은 폼이 없습니다."</p>
			)}
		</S.Container>
	);
};

export default Form;
