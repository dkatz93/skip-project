import {createStore, applyMiddleware} from 'redux'; //takes in a reducer or combine reducers to create the store
import rootReducer from './reducers/rootReducer'; 
import thunkMiddleware from 'redux-thunk'; 


export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunkMiddleware));