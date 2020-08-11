import React from 'react';
import * as S from './styles';
import { Switch, Route } from 'react-router-dom';
import CreateForm from './createForm/CreateForm';
import ResultForm from './resultForm/ResultForm';

const ManageFormRouting = () => {
	return (
		<S.RoutingConatiner>
			<Switch>
				<Route path="/main/form/create" component={CreateForm} />
				<Route path="/main/form/result" component={ResultForm} />
			</Switch>
		</S.RoutingConatiner>
	);
};

export default ManageFormRouting;
