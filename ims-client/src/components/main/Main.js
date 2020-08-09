import React from 'react';
import * as S from './styles';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Form from './form/Form';

const Main = () => {
	return (
		<S.Container>
			<Nav />
			<Route path="/main/form" component={Form} />
		</S.Container>
	);
};

export default Main;
