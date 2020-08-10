import React from 'react';
import * as S from './styles';

const Login = () => {
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
