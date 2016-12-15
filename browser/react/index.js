import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRedirect, IndexRoute} from 'react-router';
import store from './store';
import axios from 'axios'

import BarsContainer from './containers/BarsContainer';
import SingleBarContainer from './containers/SingleBarContainer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import {loadBar, loadBars, getBars, getBar} from './action-creators/bar-action-creator';

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
				<IndexRoute component = {BarsContainer} />
				<Route path="/login" component = {Login} />
				<Route path="/signup" component = {Signup} />
				<Route path="/bars" onEnter={loadBarsOnEnter} component={BarsContainer} />
				<Route path="/bars/:barName" onEnter={loadOneBarOnEnter} component={SingleBarContainer} />
				<IndexRedirect to="/bars" />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);