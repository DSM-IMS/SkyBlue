import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as S from './components/styles';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Main from './components/main/Main';

const App = () => {
	return (
		<S.Container>
			<S.GlobalStyle />
			<Header />
			<Route path="/" component={Login} exact />
			<Route path="/main/" component={Main} />
			<Redirect path="/main" to="/main/form" />
		</S.Container>
	);
};

export default App;
