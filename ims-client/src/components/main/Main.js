import React from 'react';
import * as S from './styles';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Form from './form/Form';

const Main = () => {
	return (
		<S.Container>
			<Nav />
			<Route exact path="/main" component={Form} />
		</S.Container>
	);
};

export default Main;
