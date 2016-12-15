import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, IndexRedirect, Link} from 'react-router';
import store from './store';
import axios from 'axios'

import BarsContainer from './containers/BarsContainer';
import SingleBarContainer from './containers/SingleBarContainer';

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
			<Route path="/">
				<Route path="/bars" onEnter={loadBarsOnEnter} component={BarsContainer} />
				<Route path="/bars/:barName" onEnter={loadOneBarOnEnter} component={SingleBarContainer} />
				<IndexRedirect to="/bars" />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);