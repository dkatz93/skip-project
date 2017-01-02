import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRedirect, IndexRoute} from 'react-router';
import store from './store';
import axios from 'axios'

import BarsContainer from './containers/BarsContainer';
import SingleBarContainer from './containers/SingleBarContainer';
import Home from './components/Home';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';

import {loadBar, loadBars, getBars, getBar} from './action-creators/bar-action-creator';

import {logoutCurrentUser} from './action-creators/user-action-creator'

const loadBarsOnEnter = () => {
	store.dispatch(loadBars())
}

const loadOneBarOnEnter = (nextRouterState) => {
	const barId = nextRouterState.params.barName
	store.dispatch(loadBar(barId))
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Home}>
				<IndexRoute component = {LoginContainer} />
				<Route path="/login" component = {LoginContainer} />
				<Route path="/signup" component = {SignupContainer} />

				<Route path="/bars" onEnter={loadBarsOnEnter} component={BarsContainer} />
				<Route path="/bars/:barName" onEnter={loadOneBarOnEnter} component={SingleBarContainer} />
				<IndexRedirect to="/login" />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);