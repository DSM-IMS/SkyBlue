import React from 'react';
import * as S from './styles';
import { Switch, Route } from 'react-router-dom';
import CreateForm from './createForm/CreateForm';
import ResultForm from './resultForm/ResultForm';

const ManageFormRouting = () => {
	return (
		<S.Container>
			<Switch>
				<Route path="/main/form/create" component={CreateForm} />
				<Route path="/main/form/result" component={ResultForm} />
			</Switch>
		</S.Container>
	);
};

export default ManageFormRouting;
