import React from 'react';
import * as S from './styles';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Form from './form/Form';
import ManageForm from './manageForm/ManageForm';

const Main = () => {
	return (
		<S.Container>
			<Nav />
			<Route exact path="/main/form" component={Form} />
			<Route
				path={['/main/form/create', '/main/form/result']}
				component={ManageForm}
			/>
		</S.Container>
	);
};

export default Main;
