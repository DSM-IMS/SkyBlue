import React from 'react';
import { Route } from 'react-router-dom';
import * as S from './components/styles';
import Header from './components/header/Header';
import Login from './components/login/Login';

const App = () => {
	return (
		<S.Container>
			<S.GlobalStyle />
			<Header />
			<Route path="/" component={Login} exact />
		</S.Container>
	);
};

export default App;
