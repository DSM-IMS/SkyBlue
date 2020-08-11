import React from 'react';
import * as S from './styles';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Form from './form/Form';
import manageForm from './manageForm/manageForm';

const Main = () => {
	return (
		<S.Container>
			<Nav />
			<Route exact path="/main" component={Form} />
			<Route path="/main/form" component={manageForm} />
		</S.Container>
	);
};

export default Main;
