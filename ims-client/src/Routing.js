import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Main from './components/main/Main';

const Routing = () => {
	return (
		<Switch>
			<Route path="/" component={Login} exact />
			<Route path="/main/" component={Main} />
			{/* 404 페이지 <Route component={} /> */}
		</Switch>
	);
};

export default Routing;
