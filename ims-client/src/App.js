import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as S from './components/styles';
import Header from './components/header/Header';
import Routing from './Routing';

const App = () => {
	return (
		<S.Container>
			<S.GlobalStyle />
			<Header />
			<Routing />
		</S.Container>
	);
};

export default App;
