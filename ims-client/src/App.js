import React from 'react';
import * as S from './components/styles';
import Header from './components/header/Header';

const App = () => {
	return (
		<S.Container>
			<S.GlobalStyle />
			<Header />
		</S.Container>
	);
};

export default App;
