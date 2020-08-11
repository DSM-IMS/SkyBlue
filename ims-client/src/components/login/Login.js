import React, { useState, useCallback } from 'react';
import * as S from './styles';
import axios from 'axios';

const Login = () => {
	// const [id, setId] = useState('');
	// const [pw, setPw] = useState('');
	// const [isLogin, setIsLogin] = useState(false);

	// const onChangeId = useCallback((e) => setId(e.target.value), []);
	// const onChangePw = useCallback((e) => setPw(e.target.value), []);
	// const onLogin = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		const response = await axios
	// 			.post('', {
	// 				id: id,
	// 				pw: pw,
	// 			})
	// 			.then(console.log(response))
	// 			.then(onLoginSuccess);
	// 	} catch (error) {
	// 		console.log(error);
	// 	} finally {
	// 	}

	// 	fetch('', loginFetchInfo).then(setIsLogin(true));
	// };

	// const onLoginSuccess = (response) => {
	// 	const { accessToken } = response.data;
	// };

	return (
		<S.Container>
			<S.Section>
				<S.ArticleInput type="text" placeholder="ID" />
				<S.ArticleInput type="password" placeholder="PW" />
				<S.ArticleSubmit type="submit" value="로그인" />
				<S.ArticleWrap as="span">
					<S.ArticleCheckbox type="checkbox" />
					아이디 저장
				</S.ArticleWrap>
			</S.Section>
		</S.Container>
	);
};

export default Login;
